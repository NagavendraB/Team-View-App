// APP HELPERS 
export const deleteMember = (list, member) => list.filter(item => item.id !== member.id);

export const createSearchResults = (results, criteria) => results.filter(member => member.username.indexOf(criteria)  >= 0);
