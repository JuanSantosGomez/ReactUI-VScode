const Tableu = ({data}) => {
    

    return (
        <div className="card flex flex-col">
            <div className="flex flex-row w-full overflow-hidden overflow-elli">
                { data.columns ?
                    data.columns.map(col =>
                    
                        <div className="flex-grow flex flex-col overflow-hidden overflow-elli" style={{minWidth:col.minwidth, textAlign:"center"}}>
                            
                            <div className="tablecell bg-color-500">
                                {col.name}
                            </div>
                            {   data.rows? 

                                data.rows.map(row =>
                                
                                    <div className="borderize clickable overflow-hidden overflow-elli tablecell">
                                        {row[col.name]}
                                    </div>
                                )
                                :
                                ''
                                
                            }
                        </div>
                        
                    )
                :
                ""
                }
            </div>
        </div>
    )
}

export default Tableu
