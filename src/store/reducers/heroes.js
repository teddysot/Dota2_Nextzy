import {
    SET_STR_HEROES,
    SET_AGI_HEROES,
    SET_INT_HEROES,
    SET_ROLES,
    SET_ATTACK_TYPES,
    SET_NAMES,
    ROLE_FILTER,
    TYPE_FILTER,
    NAME_FILTER,
    ROLE_TYPE_FILTER,
    CLEAR_FILTER,
    SET_HEROES_INFO,
    FILTER_HEROES
} from "../actions";

const initialState = {
    strHeroes: [],
    agiHeroes: [],
    intHeroes: [],
    roles: [],
    attackTypes: [],
    names: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STR_HEROES:
            return {
                ...state,
                strHeroes: action.value
            };
        case SET_AGI_HEROES:
            return {
                ...state,
                agiHeroes: action.value
            };
        case SET_INT_HEROES:
            return {
                ...state,
                intHeroes: action.value
            };
        case SET_ROLES:
            return {
                ...state,
                roles: action.value
            }
        case SET_ATTACK_TYPES:
            return {
                ...state,
                attackTypes: action.value
            }
        case SET_NAMES:
            return {
                ...state,
                names: action.value
            }
        case ROLE_FILTER:
            return roleFilter(state, action.value);
        case TYPE_FILTER:
            return typeFilter(state, action.value);
        case NAME_FILTER:
            return nameFilter(state, action.value);
        case ROLE_TYPE_FILTER:
            return roleTypeFilter(state, action.value);
        case CLEAR_FILTER:
            return clearFilter(state)
        case SET_HEROES_INFO:
            return setHeroesInfo(state, action.value)
        case FILTER_HEROES:
            return filterHeroes(state, action.value)
        default:
            return state;
    }
};

const filterHeroes = (state, heroes) => {
    const newStrHeroes = []
    const newAgiHeroes = []
    const newIntHeroes = []

    heroes.forEach((hero) => {
        hero.filtered = true
        switch (hero.primary_attr) {
            case "str":
                newStrHeroes.push(hero)
                break;
            case "agi":
                newAgiHeroes.push(hero)
                break;
            case "int":
                newIntHeroes.push(hero)
                break;
            default:
                return ""
        }
    })

    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

const setHeroesInfo = (state, heroes) => {
    let newRoles = new Set()
    let newAttackTypes = new Set()
    let newNames = []
    heroes.map((hero) => {
        hero.roles.forEach((role) => {
            newRoles.add(role)
        })
        newAttackTypes.add(hero.attack_type)
        newNames.push(hero.localized_name)
        return null
    })
    newRoles = Array.from(newRoles)
    newAttackTypes = Array.from(newAttackTypes)

    return {
        ...state,
        roles: newRoles,
        attackTypes: newAttackTypes,
        names: newNames
    }
}

const roleFilter = (state, value) => {
    const { strHeroes, agiHeroes, intHeroes } = state

    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]

    newStrHeroes = newStrHeroes.map((hero) => {
        if (hero.roles.indexOf(value) > -1) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
        if (hero.roles.indexOf(value) > -1) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
        if (hero.roles.indexOf(value) > -1) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })

    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

const typeFilter = (state, value) => {
    const { strHeroes, agiHeroes, intHeroes } = state
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
        if (hero.attack_type === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
        if (hero.attack_type === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
        if (hero.attack_type === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })

    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

const nameFilter = (state, value) => {
    const { strHeroes, agiHeroes, intHeroes } = state
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    console.log(value);
    newStrHeroes = newStrHeroes.map((hero) => {
        if (hero.localized_name === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
        if (hero.localized_name === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
        if (hero.localized_name === value) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

const roleTypeFilter = (state, value) => {
    const { strHeroes, agiHeroes, intHeroes } = state
    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
        if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
        if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
        if (hero.roles.indexOf(value[0]) > -1 && hero.attack_type === value[1]) {
            hero.filtered = true
        }
        else {
            hero.filtered = false
        }
        return hero
    })
    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

const clearFilter = (state) => {
    const { strHeroes, agiHeroes, intHeroes } = state

    let newStrHeroes = [...strHeroes]
    let newAgiHeroes = [...agiHeroes]
    let newIntHeroes = [...intHeroes]
    newStrHeroes = newStrHeroes.map((hero) => {
        hero.filtered = true
        return hero
    })
    newAgiHeroes = newAgiHeroes.map((hero) => {
        hero.filtered = true
        return hero
    })
    newIntHeroes = newIntHeroes.map((hero) => {
        hero.filtered = true
        return hero
    })

    return {
        ...state,
        strHeroes: newStrHeroes,
        agiHeroes: newAgiHeroes,
        intHeroes: newIntHeroes
    }
}

export default reducer;