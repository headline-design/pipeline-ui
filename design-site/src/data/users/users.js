/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import {difference, sortBy} from '../../utils/jsUtils';
 
 /*
  * ADD YOUR SITE TO THE ALGORAND BRIDGE:
  *
  * Requirements for adding your site to our showcase:
  * - It is a production-ready site with real content and decent customizations (different from the init templates)
  * - It is NOT a work-in-progress with empty pages
  * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
  *
  * Instructions:
  * - Add your site in the json array below
  * - Add a local image preview (decent screenshot of your site)
  * - Use relevant tags to qualify your site (read the tag descriptions bellow)
  * - The image MUST be added to the GitHub repository, and use `require("image")`
  * - Open a PR and check for reported CI errors
  *
  *
  * If you edit this file through the Github interface, you can:
  * - Submit first your users.js edit PR
  * - This will create a branch on your fork (usually "patch-1")
  * - Drag-and-drop an image here to add it to your existing PR
  *
  * Please help us maintain this showcase page data:
  * - Update sites with wrong data
  * - Ensure site tags remains correct over time
  * - Remove sites not using Algorand anymore
  * - Add missing sites (if the site owner agreed)
  *
  */
 
 // LIST OF AVAILABLE TAGS
 // Available tags to assign to your site
 // Please choose widely, we'll remove unappropriate tags
 export const Tags = {
   // DO NOT USE THIS TAG: we choose sites to add to favorites
   algorand: {
     label: 'Favorite',
     description:
       'Our favorite sites that you must absolutely check-out!',
     icon: <>❤️</>,
   },
 
   // For open-source sites, a link to the source code is required
   opensource: {
     label: 'Open-Source',
     description: 'Open-Source sites can be useful for inspiration!',
     icon: <>👨‍💻</>,
   },
 
   product: {
     label: 'Product',
     description: 'Sites associated to a commercial product!',
     icon: <>💵</>,
   },
 
   design: {
     label: 'Design',
     description:
       'Beautiful sites, polished and standing out from the initial template!',
     icon: <>💅</>,
   },
 
   i18n: {
     label: 'I18n',
     description:
       'Translated sites using the internationalization support with more than 1 locale.',
     icon: <>🏳️</>,
   },
 
   versioning: {
     label: 'Versioning',
     description:
       'Sites using the versioning feature of the docs plugin to manage multiple versions.',
     icon: <>👨‍👦‍👦</>,
   },
   // Sites using multi-instance plugins
   multiInstance: {
     label: 'Multi-Instance',
     description:
       'Sites using multiple instances of the same plugin on the same site.',
     icon: <>👨‍👩‍👧‍👦</>,
   },
 
   // Large sites, with a lot of content (> 200 pages, excluding versions)
   large: {
     label: 'Large site',
     description:
       'Very large sites, including much more pages than the average!',
     icon: <>💪</>,
   },
 
   facebook: {
     label: 'Facebook sites',
     description: 'Sites that include Facebook projects',
     icon: <>👥</>,
   },
 
   personal: {
     label: 'Personal sites',
     description:
       'Personal websites, blogs and digital gardens.',
     icon: <>🙋</>,
   },
 
   rtl: {
     label: 'RTL Direction',
     description:
       'Sites using the right-to-left reading direction support.',
     icon: <>↪️</>,
   },
 };
 
 // Add your site to this list
 // prettier-ignore
 const Users = [
   {
     title: 'Algorand Foundation',
     description: 'Dedicated to fulfilling the global promise of blockchain technology by leveraging the Algorand protocol and open source software',
     preview: require('./showcase/algorand.png'),
     website: 'https://algorand.foundation/',
     source: 'https://github.com/algorand/',
     tags: ['opensource', 'algorand'],
   },
   {
     title: 'Yieldly',
     description: 'The worlds first and only DeFi suite on Algorand. No-loss prize games Multi-asset staking.Cross-chain swapping.',
     preview: require('./showcase/yieldly.png'),
     website: 'https://yieldly.finance/',
     source: 'https://yieldly.finance/',
     tags: ['opensource','algorand'],
   },
   {
     title: 'Algo Explorer',
     description: 'from Rand Labs: a blockchain development lab specialized in Algorand technology',
     preview: require('./showcase/randlabs.png'),
     website: 'https://algoexplorer.io/',
     source: 'https://algoexplorer.io/',
     tags: ['opensource','algorand'],
   },
   {
     title: 'NFT JAM',
     description: 'Algorand NFT Marketplace for Resellers. Buy and Sell NFTS in ALGO and ASAs. Forwards/reverse and token auctions. Offers.',
     preview: require('./showcase/randlabs.png'),
     website: 'https://algoexplorer.io/',
     source: 'https://algoexplorer.io/',
     tags: ['opensource','algorand'],
   },
  ]
 
 export const TagList = Object.keys(Tags);
 function sortUsers() {
   let result = Users;
   // Sort by site name
   result = sortBy(result, (user) => user.title.toLowerCase());
   // Sort by favorite tag, favorites first
   result = sortBy(result, (user) => !user.tags.includes('favorite'));
   return result;
 }
 
 export const SortedUsers = sortUsers();
 
 // Fail-fast on common errors
 function ensureUserValid(user) {
   function checkFields() {
     const keys = Object.keys(user);
     const validKeys = [
       'title',
       'description',
       'preview',
       'website',
       'source',
       'tags',
     ];
     const unknownKeys = difference(keys, validKeys);
     if (unknownKeys.length > 0) {
       throw new Error(
         `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
       );
     }
   }
 
   function checkTitle() {
     if (!user.title) {
       throw new Error('Site title is missing');
     }
   }
 
   function checkDescription() {
     if (!user.description) {
       throw new Error('Site description is missing');
     }
   }
 
   function checkWebsite() {
     if (!user.website) {
       throw new Error('Site website is missing');
     }
     const isHttpUrl =
       user.website.startsWith('http://') || user.website.startsWith('https://');
     if (!isHttpUrl) {
       throw new Error(
         `Site website does not look like a valid url: ${user.website}`,
       );
     }
   }
 
   function checkPreview() {
     if (
       !user.preview ||
       (user.preview instanceof String &&
         (user.preview.startsWith('http') || user.preview.startsWith('//')))
     ) {
       throw new Error(
         `Site has bad image preview=[${user.preview}].\nThe image should be hosted on site, and not use remote HTTP or HTTPS URLs`,
       );
     }
   }
 
   function checkTags() {
     if (!user.tags || !(user.tags instanceof Array) || user.tags.includes('')) {
       throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
     }
     const unknownTags = difference(user.tags, TagList);
     if (unknownTags.length > 0) {
       throw new Error(
         `Unknown tags=[${unknownTags.join(
           ',',
         )}\nThe available tags are ${TagList.join(',')}`,
       );
     }
   }
 
   function checkOpenSource() {
     if (typeof user.source === 'undefined') {
       throw new Error(
         "The source attribute is required.\nIf your site is not open-source, please make it explicit with 'source: null'",
       );
     } else {
       const hasOpenSourceTag = user.tags.includes('opensource');
       if (user.source === null && hasOpenSourceTag) {
         throw new Error(
           "You can't add the opensource tag to a site that does not have a link to source code.",
         );
       } else if (user.source && !hasOpenSourceTag) {
         throw new Error(
           "For open-source sites, please add the 'opensource' tag",
         );
       }
     }
   }
 
   try {
     checkFields();
     checkTitle();
     checkDescription();
     checkWebsite();
     checkPreview();
     checkTags();
     checkOpenSource();
   } catch (e) {
     throw new Error(
       `Showcase site with title=${user.title} contains errors:\n${e.message}`,
     );
   }
 }
 
 Users.forEach(ensureUserValid);
