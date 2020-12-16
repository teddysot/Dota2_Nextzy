export const SET_STR_HEROES = "SET_STR_HEROES"
export const SET_AGI_HEROES = "SET_AGI_HEROES"
export const SET_INT_HEROES = "SET_INT_HEROES"
export const SET_ROLES = "SET_ROLES"
export const SET_ATTACK_TYPES = "SET_ATTACK_TYPES"
export const SET_NAMES = "SET_NAMES"
export const SET_HEROES_INFO = "SET_HEROES_INFO"
export const FILTER_HEROES = "FILTER_HERO"
export const ROLE_FILTER = "ROLE_FILTER"
export const TYPE_FILTER = "TYPE_FILTER"
export const NAME_FILTER = "NAME_FILTER"
export const ROLE_TYPE_FILTER = "ROLE_TYPE_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

// ACTION CREATORS
export const setSTRHeroes = (value) => {
    return { type: SET_STR_HEROES, value }
}

export const setAGIHeroes = (value) => {
    return { type: SET_AGI_HEROES, value }
}

export const setINTHeroes = (value) => {
    return { type: SET_INT_HEROES, value }
}

export const setRoles = (value) => {
    return { type: SET_ROLES, value }
}

export const setAttackTypes = (value) => {
    return { type: SET_ATTACK_TYPES, value }
}

export const setNames = (value) => {
    return { type: SET_NAMES, value }
}

export const setHeroesInfo = (value) => {
    return { type: SET_HEROES_INFO, value }
}

export const filterHeroes = (value) => {
    return { type: FILTER_HEROES, value }
}

export const roleFilter = (value) => {
    return { type: ROLE_FILTER, value }
}

export const typeFilter = (value) => {
    return { type: TYPE_FILTER, value }
}

export const nameFilter = (value) => {
    return { type: NAME_FILTER, value }
}

export const roleTypeFilter = (value) => {
    return { type: ROLE_TYPE_FILTER, value }
}

export const clearFilter = () => {
    return { type: CLEAR_FILTER }
}