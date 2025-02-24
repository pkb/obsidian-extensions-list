```datacorejsx
const {
    ClientSideRowModelModule,
    RowAutoHeightModule,
    NumberFilterModule,
    TextFilterModule,
    DateFilterModule,
    PaginationModule,
    CustomEditorModule,
    AgGridReact,
    CellStyleModule,
    themeQuartz, 
    colorSchemeDark} = await dc.require('basement/datacore/AgGridReact.js');
const { Link } = await dc.require('basement/datacore/Link.jsx');

const query = `@page and type="plugin"`;

const modules = [
    ClientSideRowModelModule,
    CellStyleModule,
    PaginationModule,
    NumberFilterModule,
    DateFilterModule,
    TextFilterModule,
    CustomEditorModule,
    RowAutoHeightModule
];

const myTheme = themeQuartz.withPart(colorSchemeDark);

async function updateField(page, key, v) {
    const field = page.field(key);
    const file = dc.api.app.vault.getFileByPath(page.$file);
    if (field) {
	    if(field.value != v) {
            switch (field.provenance.type) {
                case "frontmatter":
                    await dc.api.app.fileManager.processFrontMatter(file, (frontmatter) => {
                        if (v == null) {
                            if (key in frontmatter)
                                delete frontmatter[key];
                        } else
                            frontmatter[key] = v;
                    });
                    break;
                case "inline-field":
                    dc.api.app.vault.process(file, (content) => { 
                        //TODO
                        return content; 
                    });
                    break
    		}
        }
    } else if (v) {
        // there is no such field on a page
        await dc.api.app.fileManager.processFrontMatter(file, (frontmatter) => {
            frontmatter[key] = v;
        });
    }
}

const Rating = (props) => {
    if (props.value === undefined || props.value === "")
        return <span/>
    const parsedValue = typeof props.value == 'number' ? Math.min(props.value, 5) : 0;

    let stars = [];
    for(let i = 0; i < 5; i++) {
        stars.push(
            <span className={`datacore-rating-star ${i < parsedValue ? "filled" : "empty"}`}>&#9733;</span>
        );
    }
    return <span className="datacore-rating">{stars}</span>;
}

const RatingEditor = ({ value, onValueChange, stopEditing }) => {
    const [hoverValue, setHoverValue] = dc.useState(value);
    const refContainer = dc.useRef(null);

    dc.useEffect(() => { 
        refContainer.current.focus();
    }, []);

    const click = (v) => {
        onValueChange(v);
        stopEditing();
    }

    const mouseMove = (v) => {
        setHoverValue(v);
    };

    const mouseLeave = () => {
      setHoverValue(undefined);
    };

    let stars = [];
    for(let i = 0; i < 5; i++) {
        stars.push(
            <span 
               key={i}
               style={{ cursor: "pointer" }}
               onMouseMove={() => mouseMove(i + 1)}
               onMouseLeave={mouseLeave}
               onClick={() => click(i + 1)}
               className={`datacore-rating-star ${hoverValue != undefined && i <  hoverValue ? "filled" : "empty"}`}>&#9733;</span>
        );
    }
    return <span ref={refContainer} className="datacore-rating">{stars}</span>;
}

function View() {
    const pages = dc.useQuery(query);
    //const [rowData, setRowData] = dc.useState([...pages])
    const [colDefs, setColDefs] = dc.useState([
        {
            headerName: "#",
            valueGetter: p => p.data.value("number"),
        },
        {
            headerName: "Plugin",
            valueGetter: p => `${p.data.value("title")} ${p.data.value("description")}`,
            cellRenderer: p => {
               return <div style={{'line-height': 22, 'padding-top': 5, 'padding-bottom': 5}}><Link path={p.data.$path}>{p.data.value("title")}</Link><br/><small>{p.data.value("description")}</small></div>
            },
            width: 300,
            wrapText: true,
            autoHeight: true,
            resizable: true
        },
        {
            headerName: "📱",
            valueGetter: p => p.data.value("mobile"),
            cellDataType: 'boolean',
            filter: 'agNumberColumnFilter',
            filterParams: {
                filterOptions: [
                    "empty",
                    {
                        displayKey: 'supported',
                        displayName: 'Supprted',
                        predicate: (_, cellValue) => +cellValue === 1,
                        numberOfInputs: 0,
                    },
                    {
                        displayKey: 'not_supported',
                        displayName: 'Not supported',
                        predicate: (_, cellValue) => +cellValue === 0,
                        numberOfInputs: 0,
                    }
                ],
            },
        },
        {
            headerName: "⭐",
            valueGetter: p => p.data.value("stars"),
        },
        {
            headerName: "Downloads",
            valueGetter: p => p.data.value("downloads"),
            cellDataType: 'number'
        },
        {
            headerName: "Updated",
            valueGetter: p => p.data.value("updated"),
            cellRenderer: p => { 
               return <span>{p.data.value("updated").toRelative()}</span>
            },
            resizable: true
        },
        {
            headerName: "Raiting",
            valueGetter: p => p.data.value("rating"),
            valueSetter: params => {
                if(params.data) {
                    updateField(params.data, "rating", params.newValue);
                    return true;
                }
                return false;
            },
            cellRenderer: Rating,
            editable: true,
            cellEditor: RatingEditor,
            width: 150,
        }
    ]);


    const getRowId = dc.useCallback(
        (params) => String(params.data.$id),
        []
    );

    return (
        // Data Grid will fill the size of the parent container
        <div style={{ width: "100%", height: 500, minHeight: 500 }}>
            <AgGridReact modules={modules}
                defaultColDef={{resizable: false, width: 75 }}
                pagination={true}
                paginationAutoPageSize={true}
                totalRows={pages.length}
                rowData={pages}
                columnDefs={colDefs}
                getRowId={getRowId}
                theme={myTheme}
            />
        </div>
    )
}
return <View/>
```
