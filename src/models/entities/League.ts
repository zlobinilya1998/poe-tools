export type League = {
    id: string
    realm: string
    url: string
    startAt: string
    endAt: string | null
}


export enum Categories {
    Currency = 'Currency',
    Fragment = 'Fragment',
    Oil = 'Oil',
    Incubator = 'Incubator',
    Scarab = 'Scarab',
    Fossil = 'Fossil',
    Resonator = 'Resonator',
    Essence = 'Essence',
    DivinationCard = 'DivinationCard',
    SkillGem = 'SkillGem',
    BaseType = 'BaseType',
    HelmetEnchant = 'HelmetEnchant',
    UniqueMap = 'UniqueMap',
    Map = 'Map',
    UniqueJewel = 'UniqueJewel',
    UniqueFlask = 'UniqueFlask',
    UniqueWeapon = 'UniqueWeapon',
    UniqueArmour = 'UniqueArmour',
    UniqueAccessory = 'UniqueAccessory',
}
