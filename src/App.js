import './App.css';
import {useState} from 'react'
import Vresizer from './components/Vresizer';
import Hresizer from './components/Hresizer';
import TitleMenu from './components/TitleMenu';
import Buttonpanel from './components/Buttonpanel';
import Settingpanel from './components/Settingpanel';
import Folder from './components/Folder';
import Bottompanel from './components/Bottompanel';


function App() {

  const hello = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1ndignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;
  const hi = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, `

  const [sidepanelWidth,setSidepanelWidth] = useState(230);
  const [terminalHeight,setterminalHeight] = useState(300);
  const [initialPos, setInitialPos] = useState(null);
  const [initialSize, setInitialSize] = useState(250);
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
          title:"New File",
          children:[
            {title:"Hello",
              children:[
                {
                  title:"world"
                },
                {
                  title:"Other"
                },
                {
                  title:"menu"
                },
                {
                  title:"items"
                },
                {
                  title:"here"
                },
                {
                  title:"wow"
                }
              ]
            }
          ]
        },
        {
          title:"New Window",
        },
        {
          title:"New File...",
        },
        {
          title:"Open File",
        },
        {
          title:"Open Folder",
        }
      ]
    },
    {
      id:2,
      title:"Edit",
      children:[
        {
          title:"New File",
        },
        {
          title:"New Window",
        },
        {
          title:"New File...",
        },
        {
          title:"Open File",
        },
        {
          title:"Open Folder",
        },
        {
          title:"New File.s..",
        },
        {
          title:"Open Fisle",
        },
        {
          title:"Open Foldgger",
        }
      ]
    },
    {
      id:3,
      title:"Selection",
    },
    {
      id:4,
      title:"View",
    },
    {
      id:5,
      title:"Go",
    },
    {
      id:6,
      title:"Run",
    }
  ]
  );
  const [folders,setFolders] = useState([
    {
      isOpen:false,
      id:0,
      nem:"OPEN EDITORS",
      content:[
        {
          title:"src",
          children:[

            {
              title:"build",
              children:[
                {
                  title:"wow.js"
                }
              ]

            },
            {
              title:"Ididit.js"
            }

          ],
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

  function setfolds(e){ setFolders(e);}
  

  return (
    <>

      <div className="flex flex-col fullscreen bg-color-800">
          <div className="w-full flex flex-row h-2 bg-color-800 overflow-hidden z-1000">
            {/* Title Menu */}
            <TitleMenu data={menus} setter={setMenus} />
            <div className="h-full flex-grow centered">Title here</div>
            <div className="h-full w-4">Window icons here</div>


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
                  Search or Info bar here
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
                <div className="w-full h-3 bg-color-700 overflow-hidden" id="mainpanel">
                  {/* Main Panel Window Selection */}
                  Tab titles here

                </div>
                <div className="flex-grow flex flex-col h-full h-max-full overflow-hidden">
                  <div className="overflow-auto w-full flex-grow" >
                    
                  <div className="this-div-gives-space"></div>

                  </div>
                  
                  <Hresizer setterminalHeight={setterminalHeight} initialSize={yInitialSize} initialPos={yInitialPos} toggler={toggler} setInitialSize={setYInitialSize} setInitialPos={setYInitialPos} setToggler={setToggler}/>

                  
                  <div className="w-full flex-grow bg-color-700" style={{minHeight:terminalHeight,maxHeight:terminalHeight}} id="botresized">
                  App second window here
                  <div className="this-div-gives-space vh"></div>

                  </div>
                </div>
              </div>
            
              <div className="try w-1 h-max-full bg-color-600 overflow-hidden animated">
                {/* Right Side Panel */}
                Detail window here

              </div>
            </div>
          </div>
          <div className="w-full flex h-1 bg-color-900 overflow-hidden">
            {/* Footer */}
            
              <Bottompanel />
              <div className="h-full flex-grow centered">asd</div>
              <div className="h-full flex-shrink">info here</div>
            


          </div>

      </div>
    </>
  );
}

export default App;
