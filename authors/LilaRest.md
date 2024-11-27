---
aliases:
- Lila Rest <mail@lila.rest>
funding: https://lila.rest/donations
name: Lila Rest <mail@lila.rest>
type: author
url: https://lila.rest
---


%% WORKS_LIST_START %%

```datacorejsx
const { AuthorWorks } = await dc.require('basement/datacore/authors.jsx');
return function View() {
    return <AuthorWorks/>
}
```
%% WORKS_LIST_END %%