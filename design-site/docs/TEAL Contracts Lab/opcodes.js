//comment out final export for browser usage

const opCodes = {
    int: {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 0,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push(parseInt(args[0]))
        },
        inline: true
    },
    "+": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push(args[0] + args[1])
        },
        inline: false
    },
    "-": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push(args[0] - args[1])
        },
        inline: false
    },
    "*": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push((args[0] * args[1]))
        },
        inline: false
    },
    "/": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push(Math.round(args[0] / args[1]))
        },
        inline: false
    },
    byte: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 0,
            type: "string"
        },
        op: function (progData, args) {
            args[0] = args[0].replace(/"/g, "")
            progData.stack.push(args[0])
        },
        inline: true
    },
    store: {
        pushes: {
            number: 0,
            type: "any"
        },
        pops: {
            number: 1,
            type: "any"
        },
        op: function (progData, args) {
            let index = parseInt(args[1])
            progData.storage[index] = args[0]
        },
        inline: true
    },
    load: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 0,
            type: "any"
        },
        op: function (progData, args) {
            let index = parseInt(args[0])
            progData.stack.push(progData.storage[index])
        },
        inline: true
    },
    app_local_get: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 2,
            type: "any"
        },
        op: function (progData, args) {
            progData.stack.push(progData.accounts[args[0]][args[1]])
        },
        inline: false
    },
    app_global_get: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 1,
            type: "any"
        },
        op: function (progData, args) {
            progData.stack.push(progData.app_global[args[0]])
        },
        inline: false
    },
    app_local_put: {
        pushes: {
            number: 0,
            type: "any"
        },
        pops: {
            number: 3,
            type: "any"
        },
        op: function (progData, args) {
            let arg1 = args[0]
            let arg2 = args[1]
            let arg3 = args[2]
            progData.accounts[arg1][arg2] = arg3
        },
        inline: false
    },
    app_global_put: {
        pushes: {
            number: 0,
            type: "any"
        },
        pops: {
            number: 2,
            type: "any"
        },
        op: function (progData, args) {
            progData.app_global[args[0]] = args[1]
        },
        inline: false
    },
    "!": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 1,
            type: "uint64"
        },
        op: function (progData, args) {
            progData.stack.push(!args[0])
        },
        inline: false
    },
    "!=": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] !== args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    "==": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] === args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    "&&": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] && args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    "||": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] || args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    "<": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] < args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    ">": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] > args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    "<=": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] <= args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    ">=": {
        pushes: {
            number: 1,
            type: "uint64"
        },
        pops: {
            number: 2,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] >= args[1]) {
                progData.stack.push(1)
            }
            else {
                progData.stack.push(0)
            }
        },
        inline: false
    },
    global: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 0,
            type: "undefined"
        },
        op: function (progData, args) {
            progData.stack.push(global[args[0]])
        },
        inline: true
    },
    b: {
        pushes: {
            number: 0,
            type: "undefined"
        },
        pops: {
            number: 0,
            type: "undefined"
        },
        op: function (progData, args) {
            progData.branch = true
            progData.branchTo = args[0].replace(/"/g, "")
        },
        inline: true
    },
    bnz: {
        pushes: {
            number: 0,
            type: "undefined"
        },
        pops: {
            number: 1,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] > 0) {
                progData.branch = true
                progData.branchTo = args[1].replace(/"/g, "")
            }
        },
        inline: true
    },
    bz: {
        pushes: {
            number: 0,
            type: "undefined"
        },
        pops: {
            number: 1,
            type: "uint64"
        },
        op: function (progData, args) {
            if (args[0] === 0 || args[0] === false) {
                progData.branch = true
                progData.branchTo = args[1].replace(/"/g, "")
            }
        },
        inline: true
    },
    return: {
        pushes: {
            number: 0,
            type: "undefined"
        },
        pops: {
            number: 0,
            type: "undefined"
        },
        op: function (progData, args) {
            progData.branch = true
            progData.branchTo = ""
        },
        inline: false
    },
    pop: {
        pushes: {
            number: 0,
            type: "undefined"
        },
        pops: {
            number: 1,
            type: "any"
        },
        op: function (progData, args) {
            progData.stack.pop()
        },
        inline: false
    },
    txn: {
        pushes: {
            number: 1,
            type: "any"
        },
        pops: {
            number: 0,
            type: "undefined"
        },
        op: function (progData, args) {
            progData.stack.push(progData.txns[0][args[0]])
        },
        inline: true
    },
    swap: {
        pushes: {
            number: 2,
            type: "any"
        },
        pops: {
            number: 2,
            type: "any"
        },
        op: function (progData, args) {
            let b = args[1]
            let a = args[0]
            progData.stack.push(b)
            progData.stack.push(a)
        },
        inline: false
    },

}

export default opCodes