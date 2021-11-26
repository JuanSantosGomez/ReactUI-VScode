import Tableu from "./Tableu"

const Abst = () => {
    const data = {
        columns:[
            {
                name:'Name',
                minwidth:125,
            },
            {
                name:'Age',
                minwidth:25,
            },
            {
                name:'Date',
                minwidth:125,
            }
        ],
        rows:[
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            },
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            },
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            },
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            },
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            },
            {
                Name:'aba',
                Age:24,
                Date:'2021-11-30'
            },
            {
                Name:'Baa',
                Age:14,
                Date:'2021-11-30'
            }
        ]
    }
    return (
        <div>
            This is app number 1.
            <Tableu data={data}/>

        </div>
    )
}

export default Abst
