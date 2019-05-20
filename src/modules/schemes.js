import { availableSchemes } from './../libs/vtranslit';

export const allSchemes = availableSchemes;

export const schemeItrn = availableSchemes.filter(
  scheme => scheme.code === 'Itrn'
);

export const schemesOtherthanItrn = availableSchemes.filter(
  scheme => scheme.code !== 'Itrn'
);

export const defaultFromScheme = 'Itrn';

export const defaultToScheme = 'Deva';
