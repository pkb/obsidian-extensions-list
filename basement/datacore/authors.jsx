const { Link } = await dc.require('basement/datacore/Link.jsx');

const AuthorWorks = () => {
    const query = `@page and !startswith($path, "basement") and type!="category" and author`
    const currentFile = dc.useCurrentFile();
    const allNotes = dc.useQuery(query);
    const notesWithAuthor = dc.useMemo(() => {
        const filtered = allNotes.filter(p => { 
            let authors = p.value("author");
            authors = Array.isArray(authors) ? authors : [authors];
            return authors.some(a => a.path === currentFile.$path)}
        );
        return filtered;
    }, [allNotes]);
    console.log(notesWithAuthor)
    return (
        <div>
        <dc.Markdown content="## Author's works"/>
        <ul>
           {notesWithAuthor.map(s => <li><Link path={s.$path}>{s.value("title")}</Link></li>)}
        </ul>
        </div>
    );
}

return { AuthorWorks };