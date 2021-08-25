(self.webpackChunk=self.webpackChunk||[]).push([[537],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>h,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),d=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},h=function(t){var e=d(t.components);return i.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),u=d(n),m=a,p=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(p,r(r({ref:e},h),{},{components:n})):i.createElement(p,r({ref:e},h))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61644:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>h,default:()=>u});var i=n(22122),a=n(19756),o=(n(67294),n(3905)),r=["components"],s={id:"maintain-guides-validator-community",title:"Validator Community Overview",sidebar_label:"Validator Community Overview",slug:"../maintain-guides-validator-community"},l=void 0,d={unversionedId:"maintain/maintain-guides-validator-community",id:"maintain/maintain-guides-validator-community",isDocsHomePage:!1,title:"Validator Community Overview",description:"Building a Community and Attracting Nominations",source:"@site/../docs/maintain/maintain-guides-validator-community.md",sourceDirName:"maintain",slug:"/maintain-guides-validator-community",permalink:"/docs/maintain-guides-validator-community",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-validator-community.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1629856999,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"maintain-guides-validator-community",title:"Validator Community Overview",sidebar_label:"Validator Community Overview",slug:"../maintain-guides-validator-community"},sidebar:"docs",previous:{title:"How to Stop Validating",permalink:"/docs/maintain-guides-how-to-stop-validating"},next:{title:"Participate in Democracy",permalink:"/docs/maintain-guides-democracy"}},h=[{value:"Building a Community and Attracting Nominations",id:"building-a-community-and-attracting-nominations",children:[]},{value:"Gaining Visibility",id:"gaining-visibility",children:[{value:"Setting Identity",id:"setting-identity",children:[]},{value:"Website",id:"website",children:[]}]},{value:"Transparency &amp; Establishing Trust",id:"transparency--establishing-trust",children:[{value:"Self Stake",id:"self-stake",children:[]},{value:"Commission &amp; Rewards",id:"commission--rewards",children:[]},{value:"Validator Experience",id:"validator-experience",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Robust Communication",id:"robust-communication",children:[]},{value:"Actively Participating in the Community",id:"actively-participating-in-the-community",children:[]}]}],c={toc:h};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"building-a-community-and-attracting-nominations"},"Building a Community and Attracting Nominations"),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"maintain-guides-how-to-validate-polkadot"},"setting up a validator"),", nominations will not come in without extra work. The community of\nnominators will need to know about the validator in order to trust staking with them, and thus the\nvalidator must distinguish themselves in order to attract nominations. The following gives some\ngeneral guidance on different approaches to take in building a community and attracting nominations."),(0,o.kt)("p",null,"Being a high quality validator entails not only effectively running nodes, but also building a\nbrand, reputation, and community around validation services. The responsibilities of a quality\nvalidator additionally include marketing oneself and participating in the greater community.\nBecoming a known participant throughout the ecosystem is a great way to attract nominations and\nsolidify longevity and sustainability as a validator."),(0,o.kt)("p",null,"One thing to keep in mind is there is a risk involved in staking for both validators and nominators,\nas both can lose up to 100% of their funds if a validator gets slashed. This means it is paramount\nfor nominators to only nominate validators that they trust, as well as for validators to do their\nbest to instill confidence in their ability to provide validation services. Validators should do\ntheir best to build a reputation through many different means, as this is one of the most important\nfactors in how nominators should pick whom they stake with."),(0,o.kt)("h2",{id:"gaining-visibility"},"Gaining Visibility"),(0,o.kt)("p",null,"Nominators should be able to know whom they are staking with. If nominators stake with a bunch of\npseudo-anonymous addresses because it seems profitable, they expose themselves to more risks than\nnominating validators that follow best practices who they ",(0,o.kt)("em",{parentName:"p"},"know")," the addresses belong to.\nEstablishing a clear identity in multiple places can help gain visibility across the ecosystem. This\nincludes setting an on-chain identity and making a known presence throughout various community\nchannels."),(0,o.kt)("h3",{id:"setting-identity"},"Setting Identity"),(0,o.kt)("p",null,"All validators should set an on-chain ",(0,o.kt)("a",{parentName:"p",href:"../learn/learn-identity#setting-an-identity"},"identity")," and get a judgement on the identity so that\nnominators can find nodes when browsing through various dashboards and UIs. When someone interacts\nwith the chain, it ensures that an address they may come across belongs to the validator, and\nactions of that identity throughout various parts of the ecosystem (staking, governance, block\nexplorers, etc) form a cohesive representation of their participation."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Note: When running multiple validator nodes, the best way to scale an identity is to use multiple\nsub-identities from a single verified identity."))),(0,o.kt)("p",null,"It's recommended to fill out as many fields in the identity as possible, so Nominators have ample\nmeans of reaching out. Nominators may wish to know more about the Validator, the particular setup,\nfuture staking plans, tooling used, or a number of additional topics. Having a dedicated website\nadditionally to provide this sort of information is ideal."),(0,o.kt)("h3",{id:"website"},"Website"),(0,o.kt)("p",null,"One thing that can help get some visibility is setting up a dedicated site for your validator, which\nincludes the networks that one is a validator for and validator details such as addresses,\ncommission, and so forth. Including all suggestions from this page is potential content to include\non the site. After setting up a website, a validator should include this website in the\ncorresponding field in their identity so nominators can find it easily."),(0,o.kt)("h2",{id:"transparency--establishing-trust"},"Transparency & Establishing Trust"),(0,o.kt)("p",null,"Considering the risks involved for both Validators and Nominators, establishing trust is one of the\nmost important factors in running quality validator services."),(0,o.kt)("h3",{id:"self-stake"},"Self Stake"),(0,o.kt)("p",null,"Validators should have skin in the game in their operations in the form of stake that is self-bonded\nto their validator stash. As slashing applies to the total stake of a Validator, having a high self\nstake shows confidence in operations, and that they have skin in the game and a lot to lose if they\nmess up. Having very little self stake can be a signal to nominators that they have nothing to lose\nin the case of failures."),(0,o.kt)("p",null,"Additionally, it can help nominators to get a sense of how validators manage their own stake.\nDefining a self allocation strategy is also helpful in seeing how efficiently a validator's stake\ncan be utilized."),(0,o.kt)("h3",{id:"commission--rewards"},"Commission & Rewards"),(0,o.kt)("h4",{id:"commission"},"Commission"),(0,o.kt)("p",null,"What does your validator charge as commission and how did you come to this number? It can be helpful\nto be transparent about the long term plans around the business models of running a validator,\nincluding the costs for infrastructure and man-hours involved in maintaining operations. As many\nvalidators will charge low commissions that often do not cover costs, outlining what commission is\ncharged and why can help justify higher commission rates."),(0,o.kt)("p",null,"Besides the current commission, it would be helpful to describe the ",(0,o.kt)("em",{parentName:"p"},"range")," of commission charged,\nas nominators can know what to expect in the case that the rate goes up or down. Nominators may want\nto nominator a validator with a very narrow commission percent range, as this signals stability in a\nvalidator's operations and business plans."),(0,o.kt)("p",null,'Many validators will charge 0% or near 0% commission to bootstrap themselves at first, with plans to\nraise that over time. It can be helpful to elaborate on these plans in the future. For example\n"',(0,o.kt)("em",{parentName:"p"},"after x amount of months in the active set with 0% commission, we plan to increase it to 1%"),'."'),(0,o.kt)("h4",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"Another factor to consider is that claiming rewards for both the validator and nominator is not\nautomatic. Rewards must be claimed manually or set up in an automated way. Validators are suggested\nto claim rewards on behalf of their nominators, and be transparent about how often claiming will\nhappen. A nominator may be more likely to stake with a validator that claims rewards daily instead\nof one that doesn't claim rewards at all."),(0,o.kt)("p",null,"The following are some tools for automating reward claiming:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/canontech/staking-payouts"},"staking-payouts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stakelink/substrate-payctl"},"substrate-payctl"))),(0,o.kt)("h3",{id:"validator-experience"},"Validator Experience"),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"One aspect of building trust is being transparent about your validator infrastructure. If nominators\nknow that you are running a tight ship that is focused on security, they are more likely to trust\nyou compared to those that do not disclose their infrastructure."),(0,o.kt)("p",null,"Some factors of architecture to highlight might include:"),(0,o.kt)("h4",{id:"servers"},"Servers"),(0,o.kt)("p",null,"Outlining how a validator runs their servers helps nominators get a sense of how diversified a\nvalidator is. Does the Validator run in the cloud, on dedicated machines, in a co-located\ndatacenter, or in a home residential setup? Do they run multiple nodes on the same machine? If every\nvalidator is hosted in AWS, there is a risk of potential outages that cause large amounts of nodes\nto go offline, causing slashing for unresponsiveness. Nominators may want to choose validators that\nhave thoroughly diversified the providers they use or the facilities they operate in."),(0,o.kt)("p",null,"Additionally, how does a Validator contribute to decentralization? It can be helpful to outline\nefforts made towards this so that the values of a Nominator and Validator are aligned."),(0,o.kt)("p",null,"It's also helpful to outline what kind of OS is used on these servers, and what is the updating\npolicy on the software on that OS. For example, are LTS versions used, do they use NiXOS,\ndistro-packaged libraries, any server hardening practices, etc."),(0,o.kt)("h4",{id:"specs"},"Specs"),(0,o.kt)("p",null,"Are you running the recommended Standard Hardware for Polkadot? Can you ensure that machines have\nenough processing power, memory, file storage, and network connectivity? It's helpful for nominators\nto know the specs of the machines a validator uses as to assess how they may perform in the network.\nIf a validator is running underpowered machines, they may not want to nominate them, as these can\nresult in fewer blocks produced and fewer overall rewards. In certain circumstances, more powerful\nmachines can result in higher rewards for both the Validator and their Nominators."),(0,o.kt)("h4",{id:"automation-and-orchestration-approaches-terraform-ansible-chef-puppet-kubernetes-etc"},"Automation and orchestration approaches (terraform, ansible, chef, puppet, kubernetes, etc)"),(0,o.kt)("p",null,"What kind of approach is taken for spinning up and provisioning nodes? How might you automate\nspinning up large clusters of nodes and upgrading them? Elaborating on what kind of automation (or\nlack thereof) can help get a sense of how robust a validator setup is. There are many common actions\nor routine maintenance that needs to be done, and automating this type of thing often helps mitigate\nhuman errors."),(0,o.kt)("h4",{id:"network-topology"},"Network Topology"),(0,o.kt)("p",null,"Does the Validator node have protection against Denial of Service attacks, and if so how is that\ndone? Outlining the kind of network topology of Validator infrastructure will help Nominators get a\nsense of how resilient operations are to attacks. Some things to highlight are usages of firewalls,\nVPNs, network segmentation, proxies, or other layers separation."),(0,o.kt)("h4",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"Both Polkadot and Kusama releases are published\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"here"),". Validators are expected to upgrade their\nnodes as soon as a new release comes out. Although not every release is mandatory to upgrade to,\neach new release usually has bug fixes, optimizations, new features, or other beneficial changes.\nIt's within the best interest of the entire network that validators update their nodes in a timely\nfashion. This signals to nominators that a validator is timely, care about their operations and is\nquick to adapt to necessary circumstances."),(0,o.kt)("p",null,"It can also be useful for Nominators to know how the Validator runs software, and where they get new\nbinaries from. How do they get alerted for new releases? Do they hear about things from matrix? Do\nthey have alerts for particular Github activities? Do they use the Debian/RPM packages? Do they use\nthe Parity-provided Github binaries? Do they use Parity Docker images? Do they make their own Docker\nimages? Do they build the binaries themselves? Validators often have their own build server for\nmaking binaries. If they take the extra steps to make these and do not rely on external parties,\nthis can be seen as a plus from nominators, as it helps contribute to decentralization."),(0,o.kt)("h4",{id:"logging-metrics-monitoring-and-observability"},"Logging, metrics, monitoring, and observability"),(0,o.kt)("p",null,"Good node operators keep tabs on how their systems are running. Observability is one of the most\nimportant aspects of understanding the performance and behavior of a node. One should be able to\noutline the efforts taken in building out monitoring and observability practices. Are Prometheus and\nGrafana set up? What types of metrics are collected and looked at? How is this done across multiple\nnodes? A quality validator may even make these types of metrics and graphs public so that Nominators\ncan see how these nodes are running."),(0,o.kt)("h5",{id:"health-checks-and-alerting-conditions"},"Health checks and alerting conditions"),(0,o.kt)("p",null,"Similar to the last point, it can be helpful for nominators to know what kind of health checks and\nalerting conditions are in place for validator nodes. What conditions are not normal and may need to\nbe looked at? If conditions are not normal, how is the node operator alerted to this? Are there any\npublic Telegram, SMS, or email alerts? Nominators will want to know that a Validator can respond to\nabnormal conditions in a timely manner, as their tokens are on the line of potentially being lost."),(0,o.kt)("h5",{id:"scenario-runbooks"},"Scenario runbooks"),(0,o.kt)("p",null,"Many scenarios happen routinely, such as upgrading nodes, restoring backups, or moving servers.\nCreating runbooks and sharing the procedures and precautions taken around these can instill\nconfidence in nominators that various scenarios are thought out and planned for."),(0,o.kt)("h5",{id:"which-regions-nodes-are-in"},"Which regions nodes are in"),(0,o.kt)("p",null,"A diverse network of nodes in varying different regions helps strengthen decentralized networks.\nOutlining what regions nodes are in gives clarity to this facet of networks. Nominators may want to\npromote validators that actively try and decentralize networks that operate in regions that others\ndo not run nodes in."),(0,o.kt)("h5",{id:"security--key-handling-policies"},"Security / Key handling policies"),(0,o.kt)("p",null,"It is paramount that session keys and stash/controller keys are stored and handled with the utmost\ncare, as a compromise of these can get both validator and nominator slashed. Outlining how keys are\nhandled, how they are stored, who has access to them, and the overall policies and procedures around\nthem is a great point of reference for nominators to gauge how comfortable they are with the\nsecurity a validator takes."),(0,o.kt)("h3",{id:"robust-communication"},"Robust Communication"),(0,o.kt)("p",null,"The relationship between Validators and Nominators is one built on trust, and as such, having direct\nlines of communication with Nominators is a great way to build and reinforce that trust. This could\nmean setting up dedicated Telegram / Matrix / Discord channels or hosting a reoccurring call where\nanyone can join. Creating environments that are inclusive with direct connections between parties is\ngoing the extra mile to make sure that nominators know they're in good hands. There are many updates\nthat can be given, such as nodes being updated to a new version, rewards were paid out, servers were\nmigrated, new features or tools have been built, or just checking in to say hello. These kinds of\ngestures can be much appreciated in putting words and a person behind the name of someone running a\nserver."),(0,o.kt)("h3",{id:"actively-participating-in-the-community"},"Actively Participating in the Community"),(0,o.kt)("p",null,"Participating in the community goes hand in hand with building a reputation. This is not only for\nNominators, but for other Validators, builders, developers, governance participants, and general\nenthusiasts. Being helpful or contributing to discussions can go a long way in building a trusted\nbrand and reputation."),(0,o.kt)("p",null,"There are many communities to participate in, from validator, developer, and governance communities,\nto local communities dedicated to specific regions. For example, one can be pretty active in the\nSouth American communities, and building camaraderie among those that speak the same language, or\ncan go to the same meetups in an area. One of the absolute best ways of building trust is meeting\npeople in person."),(0,o.kt)("h4",{id:"participating-in-governance"},"Participating in Governance"),(0,o.kt)("p",null,"An additional way to show that one cares about the network is to actively participate in Governance.\nWhether it is on-chain in voting, off-chain in participating in discussions, or proposing new\nthings, active participation in the direction of the chain is a great signal that a validator is\nthere for the good of the network. There are many ways different aspects of governance one can\nparticipate in, such as voting for council members, weighing in on treasury proposals, voting on\npublic referenda, proposing tips, and more. See the section on ",(0,o.kt)("a",{parentName:"p",href:"maintain-guides-democracy"},"governance")," for additional\ndetails."),(0,o.kt)("h4",{id:"producing-educational-content"},"Producing Educational Content"),(0,o.kt)("p",null,"With a very fast-moving ecosystem, there often are gaps in educational content where there are new\nfeatures, new changes, deprecations, or just a slow-moving process for putting out information about\nvery complex concepts. Putting out educational content in the form of blog posts, videos, tutorials,\ndevelopment guides, and more (especially if it's geared towards nominators) provides tangible value\nto the ecosystem. It shows that one has a good grasp of how things work, and disseminating this\nknowledge to others can provide some credence to one's brand and reputation as a competent entity in\nthe space. Furthermore, one might get tips from the treasury if the community finds something\nparticularly useful."),(0,o.kt)("h4",{id:"building-tooling"},"Building Tooling"),(0,o.kt)("p",null,"Building public tooling is a great way to support the ecosystem. This not only provides tangible\nvalue to those that use this tooling but also gives visibility to the validator for their\ncontributions. A nominator might be more likely to nominate a validator for the utilities they\nprovide the ecosystem since the validator then can build a reputation around the quality of their\nwork outside their validation services. Some potential categories of building things are: block\nexplorers, deployment scripts, monitoring and observability services, staking dashboards, wallets,\ncommand-line utilities, or porting implementations to other languages. Additionally, this may also\nbe eligible to be funded via a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program"},"Web 3 Foundation Grant"),"."))}u.isMDXComponent=!0}}]);