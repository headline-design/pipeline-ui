//comment out following line for browser-only usage
import opCodes from './opcodes.js'

export default function main(newTeal){

var tealLog = ""
var stackLog = ""
var tealArray = ""

const progData = {

    stack: [],
    index: 0,
    global: {
        Round: 12345
    },
    txns: [{amount: 3}],
    app_global: {
        depositAmount: 10000000000,
        staked: 9500000000
    },
    accounts: [
        { amt: 4000000000 }
    ],
    storage: [],
    branch: false,
    branchTo: ""

}

var teal = `byte "staked"
app_global_get
int 0
byte "amt"
app_local_get
/
store 3
byte "depositAmount"
app_global_get
load 3
/
store 1
load 1
int 0
byte "amt"
app_local_get
+
store 0
txn amount
byte "b"
swap
//return
int 1
bnz test
int 7
test:
byte "hello"
`

if (newTeal.length){
    teal = newTeal
}


const removals = [
    "#",
    "//"
]


function parse(program) {
    let pArray = program.split("\n")
    let newArray = []
    pArray.forEach(line => {
        let keep = true
        removals.forEach(phrase => {
            if (line.includes(phrase) || line === "") {
                keep = false
            }
        })
        if (keep) {
            newArray.push(line)
        }
    })
    return newArray
}

function testTeal(prgm) {
    tealLog = ""
    stackLog = ""
    let parsed = parse(prgm)
    for (let i = progData.index; i < parsed.length; i++) {

        let line = parsed[i]
        tealOps(line,"yellow")

        if (!progData.branch) {
            line = line.trimEnd()
            let elements = line.split(" ")
            let opCode = elements[0]

            if (!opCode.includes(":")) {

                let numArgs = opCodes[opCode].pops.number
                let type = opCodes[opCode].pops.type

                let args = []

                if (opCodes[opCode].inline) {

                    if (numArgs > 0) {
                        for (let i = 0; i < numArgs; i++) {
                            args.push(progData.stack.pop())
                        }
                        args.reverse()
                    }

                    elements.shift()
                    args = [...args, ...elements]
                    opCodes[opCode].op(progData, args)
                }
                else {

                    for (let i = 0; i < numArgs; i++) {
                        args.push(progData.stack.pop())
                    }
                    args.reverse()
                    opCodes[opCode].op(progData, args)
                }
            }
        }
        else {
            if (line === progData.branchTo + ":") {
                progData.branch = false
            }
        }
        log(progData.storage.length?progData.storage:"empty","aqua")
        logStack(progData.stack.length?progData.stack:"empty",progData.stack.length?"red":"yellow")
    }

    //log("App Global State:")
    //log(JSON.stringify(progData.app_global))
    //log("App Local State:")
    //log(JSON.stringify(progData.accounts))
}


testTeal(teal)

function log(text,color= "white"){
    tealLog += '<p style="color:' + color + '">'  + text + "</p>"
    document.getElementById("log").innerHTML = tealLog
}

function logStack(text,color= "white"){
    stackLog += '<p style="color:' + color + '">'  + text + "</p>"
    document.getElementById("stackLog").innerHTML = stackLog
}

function tealOps(text,color= "white"){
    tealArray += '<p style="color:' + color + '">'  + text + "</p>"
    document.getElementById("teal").innerHTML = tealArray
}
}