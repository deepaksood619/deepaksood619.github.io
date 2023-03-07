# ID3, C4.5 and CHAID

CHAID - Chi-Squared Automatic Interaction Detection

## C4.5 and CHAID Algorithm

## Outline

- Disadvantages of ID3 algorithm
- C4.5 algorithm
  - Gain ratio
  - Noisy data and overfitting
  - Tree pruning
  - Handling of missing values
  - Error estimation
  - Continuous data
- CHAID

## ID3 Algorithm

- Top down construction of decision tree by recursively selecting the "best attribute" to use at the current node, based on the training data
- It can only deal with nominal data
- It is not robust in dealing with noisy data sets
- It overfits the tree to the training data
- It creates unnessarily complex trees without pruning
- It does not handle missing data values well

## C4.5 Algorithm

- An Improvement over ID3 algorithm
- Designed to handle
  - Noisy data better
  - Missing data
  - Pre and post pruning of decision trees
  - Attributes with continuous values
  - Rule Derivation

## Fix overfitting / overleaning problem

1. Pre-prune: Stop growing a branch when information becomes unrealiable

2. Post-prune: Take a fully-grown decision tree and discard unreliable parts

## Chi-Squared Automatic Interation Detection (CHAID)

- It is one of the oldest tree classification methods originally proposed by Kass in 1980
- The first step is to create categorical predictors out of any continuous predictors by dividing the respective continuous distributions into a number of categories with an approximately equal number of observations
- The next step is to cycle through the predictors to determine for each predictor the pair of (predictor) categories that is least significantly different with respect to the dependent variable
- The next step is to choose the split the predictor variable with the smallest adjusted p-value, i.e., the predictor variable that will yield the most significant split
- Continue this process until no further splits can be performed

## Algorithm

Dividing the cases that reach a certain node in the tree

1. Cross tabulate the response variable (target) with each of the explanatory variables

2. When there are more than two columns, find the best subtable formed by combining column categories

   - This is applied to each table with more than 2 columns

   - Compute Pearson X^2^ tests for independence for each allowable subtable

   - Look for the smallest X^2^ value. If it is not significant, combine the column categories

   - Repeat step 2 if the new table has more than two columns

3. Allows categories combined at step 2 to be broken apart

   - For each compound category consisting of at least 3 of the original categories, find the "most signifcant" binary split

   - If X^2^ is significant, implement the split and return to step 2

   - Otherwise retain the compound categories for this variable, and move on to the next variable

4. You have now completed the "optimal" combining of categories for each explanatory variable

   - Find the most significant of these "optimally" merged explanatory variables

   - Compute a "Bonferroni" adjusted chi-squared test of independence for the reduced table for each explanatory variable

5. Use the "most significant" variable in step 4 to split the node with respect to the merged categories for that variable

   - repeat steps 1-5 for each of the offspring nodes

   - Stop if

       - no variable is significant in step 4

       - the number of cases reaching a node is below a specified limit

<http://www.statsoft.com/textbook/chaid-analysis>

<http://www.public.iastate.edu/~kkoehler/stat557/tree14p.pdf>
