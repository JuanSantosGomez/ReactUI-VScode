import './App.css';

import {useState} from 'react'
import Vresizer from './components/Vresizer';
import Hresizer from './components/Hresizer';
import TitleMenu from './components/TitleMenu';
import Buttonpanel from './components/Buttonpanel';
import Settingpanel from './components/Settingpanel';
import Folder from './components/Folder';
import Bottompanel from './components/Bottompanel';

import { useSelector } from 'react-redux';
import './Theme-0.css'
import Applicates from './components/Applicates';






function App() {
  const theming = useSelector(state => state.themer);
  const apping = useSelector(state => state.switchapp);


  const hello = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1ndignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;
  const hi = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, `
  
  const [sidepanelWidth,setSidepanelWidth] = useState(230);
  const [terminalHeight,setterminalHeight] = useState(300);
  const [initialPos, setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(250);
  const [theme,setTheme] = useState('green-theme')
  const [unreleased, setUnreleased] = useState(true);
  const [yInitialPos, setYInitialPos] = useState(null);
  const [yInitialSize, setYInitialSize] = useState(40);
  const [toggler,setToggler] = useState(false);
  const [menus,setMenus] = useState([
    {
      id:1,
      title:"File",
      children:[
        {
          title:"Preferences",
          children:[
            {
              title:'themes',
              children:[
                  {
                    title:'green-theme',
                    themer:true,
                  },
                  {
                    title:'basic',
                    themer:true,
                  }
                ]
            }
          ]
        }
      ]
    },
  ]
  );
  const [folders,setFolders] = useState([
    {
      isOpen:false,
      id:0,
      nem:"ADMIN OPTIONS",
      content:[
        {
          title:"Stores",
          children:[

            {
              title:"Store 1",
              children:[
                {
                  title:"Edit Store",
                  app:"abs"
                },
                {
                  title:"Monitor Carts",
                  app:"bas"
                },
                {
                  title:"View Sales"
                }
              ]

            },
            {
              title:"Add New Store"
            }

          ],
        }, 
        {
          title:"Item Sets",
          children:[
            {
              title:"Item Set 1",
              children:[
                {
                  title:"Edit"
                },
                {
                  title:"Add Inventory"
                }
              ]
            }
          ]
        },
        {
          title:"Monitor All Carts",
        },
       
        {
          title:"Settingpanel.js",
        }
      ]

    },
    {
      isOpen:false,
      id:1,
      nem:"DATABASE OPTIONS",
      content:[
        {
          title:"All Items",
        },
        {
          title:"Add Item",
        },
        {
          title:"Update",
        },
       
      ]

    },
  ])

  const [underfolders,setunderFolders] = useState([
    {
      isOpen:false,
      id:0,
      nem:"OPEN EDITORS",
      content:[
        {
          title:"Buttonpanel.js",
        },
        {
          title:"Folder.js",
        },
        {
          title:"Hresizer.js",
        },
        {
          title:"Settingpanel.js",
        }
      ]

    },
    {
      isOpen:false,
      id:1,
      nem:"New Thing",
      content:[
        {
          title:"Buttonpanel.js",
        },
        {
          title:"Folder.js",
        },
        {
          title:"Hresizer.js",
        },
        {
          title:"Settingpanel.js",
        },
        {
          title:"Folder.js",
        },
        {
          title:"Hresizer.js",
        },
        {
          title:"Settingpanel.js",
        },
        {
          title:"Folder.js",
        },
        {
          title:"Hresizer.js",
        },
        {
          title:"Settingpanel.js",
        }
      ]

    },
  ])

  const changetheme = (e) =>{
    let tema = theme;
    setTheme(e)
  }

  function setfolds(e){ setFolders(e);}
  

  return (
    <>

      <div id="app" className={`flex flex-col fullscreen bg-color-800 ${theming}`}>
          <div className="w-full flex flex-row h-2 bg-color-400 overflow-hidden z-1000">
            {/* Title Menu */}
            <TitleMenu data={menus} setter={setMenus} themechange={changetheme}/>
            <div className="h-full flex-grow centered">{/*Title here*/}</div>
            <div className="h-full w-4 clickable" onClick={changetheme}>{/*Window icons here*/}</div>

          </div>
          <div className="w-full vh overflow-hidden">
            <div className="flex flex-row h-max-full">
              <div className="w-2 h-max-full flex flex-col bg-accent-001">
                {/* Side Buttons */}
                <Buttonpanel />
                <Settingpanel />

              </div>
              <div className="flex flex-col h-max-full vh bg-color-900" style={{minWidth:sidepanelWidth,maxWidth:sidepanelWidth}} id="sideresized">
                {/* Side Menu */}
                <div className="w-full h-20 overflow-hidden">
                  {/*Search or Info bar here*/}
                </div>
                <div className="flex flex-col w-full overflow-hidden">
                  <div className="w-full flex flex-col flex-shrink overflow-hidden">
                    {folders.map((fold) => <Folder folder={folders} fold= {fold} onClic={setfolds}/>)}
                    
                  </div>
                  <div className="w-full flex-grow h-min-1">
                    {underfolders.map((fold) => <Folder folder={underfolders} fold= {fold} onClic={setunderFolders}/>)}
                    

                    <div className="this-div-gives-space"></div>
                  </div>  
                </div>
              </div>

              <Vresizer setSidepanelWidth={setSidepanelWidth} initialSize={initialSize} initialPos={initialPos} unreleased={unreleased} setInitialSize={setInitialSize} setInitialPos={setInitialPos} setUnreleased={setUnreleased}/>


              <div className="flex-grow flex flex-col h-max-full vh overflow-hidden">
                {/* Main Panel */}
                <div className="w-full h-3 bg-color-500 overflow-hidden" id="mainpanel">
                  {/* Main Panel Window Selection */}

                </div>
                <div className="flex-grow flex flex-col h-full h-max-full overflow-hidden">
                  <div className="overflow-auto w-full flex-grow" >
                  <Applicates sami={apping}/>
                    
                  <div className="this-div-gives-space"></div>

                  </div>
                  
                  <Hresizer setterminalHeight={setterminalHeight} initialSize={yInitialSize} initialPos={yInitialPos} toggler={toggler} setInitialSize={setYInitialSize} setInitialPos={setYInitialPos} setToggler={setToggler}/>

                  
                  <div className="borderize w-full flex-grow bg-color-700 " style={{minHeight:terminalHeight,maxHeight:terminalHeight}} id="botresized">
                  App second window here
                  <div className="this-div-gives-space vh"></div>

                  </div>
                </div>
              </div>
            
              <div className="try w-1 h-max-full bg-color-700 borderleft overflow-hidden animated">
                {/* Right Side Panel */}
                Detail window here

              </div>
            </div>
          </div>
          <div className="w-full flex h-1 bg-accent-000 text-002 overflow-hidden">
            {/* Footer */}
            
              <Bottompanel />
              <div className="h-full flex-grow centered ">asd</div>
              <div className="h-full flex-shrink">info here</div>
            


          </div>

      </div>
    </>
  );
}

export default App;
