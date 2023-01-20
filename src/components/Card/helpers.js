export const DEFAULT_ITEM_DESCRIPTION = 'Чего сидишь? Порадуй котэ, '
export const DEFAULT_ITEM_DESCRIPTION_PREFIX = 'купи.'
export const DISABLED_ITEM_DESCRIPTION = type => `Печалька, ${type} закончился.`

export const getClassNames = (defaultClassName, isSelected, isDisabled) => {
    return `${defaultClassName} ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`
}

export const getDescriptionByState = (item, isSelected, onClick) => {
    if (item.disabled) {
        return <span className="disabledDescription">{DISABLED_ITEM_DESCRIPTION(item.subtitle)}</span>
    }

    if (isSelected) {
        return <>{item.description}</>
    }

    return <><span>{DEFAULT_ITEM_DESCRIPTION}</span><span onClick={onClick} className="link">{DEFAULT_ITEM_DESCRIPTION_PREFIX}</span></>
}