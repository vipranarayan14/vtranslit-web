# Notes
 
## linked scheme selects conditions:

rule 1:
toSchemeList should not have current frommScheme

rule 2:
if frommScheme !== Itrn
toScheme = Itrn

rule 3:
if toScheme === Multi
frommScheme === Itrn
