/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  cowProtocolSidebar: [
    {
      type: 'category',
      label: 'Protocol (Batch Auctions)',
      link: {
        type: 'doc',
        id: 'cow-protocol/README',
      },
      items: [
        {
          type: 'category',
          label: 'Concepts',
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/concepts',
            }
          ]
        },
        {
          type: 'category',
          label: 'Howto',
          items: [
            {
              type: 'category',
              label: 'Create orders',
              link: {
                type: 'doc',
                id: 'cow-protocol/create/README',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/create',
                }
              ]
            },
            {
              type: 'category',
              label: 'View orders',
              link: {
                type: 'doc',
                id: 'cow-protocol/view/README',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/view'
                }
              ]
            },
            {
              type: 'category',
              label: 'Messaging',
              link: {
                type: 'doc',
                id: 'cow-protocol/message/README'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/message',
                },
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/reference/apis'
                }
              ]
            },
            {
              type: 'category',
              label: 'Solve auctions',
              link: {
                type: 'doc',
                id: 'cow-protocol/solve/README'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/solve'
                }
              ]
            },
            {
              type: 'category',
              label: 'Arbitrate auctions',
              link: {
                type: 'doc',
                id: 'cow-protocol/arbitrate/README'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/arbitrate'
                }
              ]
            },
            {
              type: 'category',
              label: 'Settle auctions',
              link: {
                type: 'doc',
                id: 'cow-protocol/settle/README'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/settle'
                }
              ]
            },
            {
              type: 'category',
              label: 'Analyze auctions',
              link: {
                type: 'doc',
                id: 'cow-protocol/analyze/README'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'cow-protocol/analyze'
                },
                {
                  type: 'doc',
                  id: 'cow-protocol/reference/apis/orderbook'
                }
              ]
            },    
          ]
        },
        {
          type: 'category',
          label: 'Technical reference',
          link: {
            type: 'generated-index',
            title: 'Technical reference',
            slug: 'cow-protocol/reference',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/reference'
            }
          ]
        },          
      ],
    },
  ],
  governanceSidebar: [
    {
      type: 'category',
      label: 'DAO Governance',
      link: {
        type: 'doc',
        id: 'governance/README',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'governance'
        }
      ]
    }
  ]
};

module.exports = sidebars;
