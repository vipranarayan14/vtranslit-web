import { vTranslit } from 'vtranslit';
import { vTranslitSchemeDeva } from 'vtranslit-scheme-deva';
import { vTranslitSchemeGran } from 'vtranslit-scheme-gran';
import { vTranslitSchemeItrn } from 'vtranslit-scheme-itrn';
import { vTranslitSchemeKnda } from 'vtranslit-scheme-knda';
import { vTranslitSchemeTaml } from 'vtranslit-scheme-taml';
import { vTranslitSchemeTelu } from 'vtranslit-scheme-telu';

export const vTranslitSchemes = [
  vTranslitSchemeDeva,
  vTranslitSchemeGran,
  vTranslitSchemeItrn,
  vTranslitSchemeKnda,
  vTranslitSchemeTaml,
  vTranslitSchemeTelu
];

export const vtranslit = vTranslit(vTranslitSchemes);

export const availableSchemes = vtranslit.list();
