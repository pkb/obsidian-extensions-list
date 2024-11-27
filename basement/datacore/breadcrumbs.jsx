const { Link } = await dc.require('basement/datacore/Link.jsx');

// Based on component by Azael https://discord.com/channels/1219902517304098836/1248851796810530816/1298277979906113619
function SuperchargedLink({page}) {
    const attributes = Object.entries(page.$frontmatter || {}).map(([key, value]) => ([`data-link-${key}`, value.raw]));
    const attributesObject = Object.fromEntries(attributes);
    return <span className="data-link-text-dc" data-link-path={page.$path} data-link-tags={page.$tags} {...attributesObject}>
        <dc.Link link={page.$link} />
    </span>
}

/**
 * @TODO handle circular links
 * @TODO handle multiple parents (Array of parents)
 * @TODO make home link actually work
 */
function Breadcrumb({path, home}) {
    const file = dc.useQuery(`@page and $path = "${path}"`)[0]
    if(!file) return <mark class="flex red text"><dc.Icon icon="file-x" /></mark>
    const parent_path = file.value("parent")?.path;
    if(parent_path) {
        return <>
            <Breadcrumb path={parent_path} home={home}/>
            <dc.Icon icon="chevron-right" />
            <SuperchargedLink page={dc.useFile(parent_path)} />
        </>
    } else if (home)
        return <Link path={home}><dc.Icon icon="house"/></Link>
    return <dc.Callout title="No Parent!" type="fail"  collapsible={false} initialOpen={false} icon={<dc.Icon icon="triangle-alert"/>} />
}

function Breadcrumbs({home=null}) {
    const current = dc.useCurrentFile();
    return <div style="display: flex; align-items: center;">
        <Breadcrumb path={current.$path} home={home}/>
    </div>
}

return { SuperchargedLink, Breadcrumbs }