# R

## Introduction

In R, you can store data in a variable by using either `=` or `<-`.

```python
var <- 'Hello'
hourPerDay <- 24
daysPerWeek = 7
print(var)
nchar(var) # number of characters
c(var, somevar) # concatenate two variables

str(var) # stands for structure, tells the type of variable
class(hourPerDay) # 'numeric', check type of variable

a <- 5
b <- "6"
a * as.numeric(b) # as.numeric is used to convert string to integer

library(tidyverse) # importing an R package

chocolateData <- read_csv("../input/chocolate-bar-ratings/flavors_of_cacao.csv")
# some of our column names have spaces in them. This line changes the column names to
# versions without spaces, which let's us talk about the columns by their names.
names(chocolateData) <- make.names(names(chocolateData), unique=TRUE)

head(chocolateData) # the head() function reads just the first few lines of a file.
tail(chocolateData, 3) # the tail() function reads in the last 3 lines of a file.

Getting data from two dimensional data structure
chocolateData[6,4] # get the contents in the cell in the sixth row and the forth column
chocolateData[6,] # get the contents of every cell in the 6th row (note that you still need the comma)
head(chocolateData[6]) # if you forget the coulmn, you'll get the 6th *column* instead of the 6th *row*
chocolateData <- chocolateData[-1,] # we can remove data by putting a minus sign (-) in front of the index we don't want

chocolateData <- type_convert(chocolateData) # automatically convert the data types of our data_frame

chocolateData$Cocoa_Percent <- sapply(chocolateData$Cocoa_Percent, function(x) gsub("%", "", x)) # remove all the percent signs in the fifth column

names(chocolateData) <- gsub("[[:space:]+]", "_", names(chocolateData)) # remove the white spaces in the column names
```

## Variables

1. Character (Surrounded by double quotes)
2. Numeric
3. Logical (Boolean) (TRUE/FALSE)
4. vector - a vector is list of data that is all of the same data type.

      ```python
      listOfNumbers <- c(1,5,91,42.8,100008.41)
      5 * listOfNumbers
      listOfNumbers [3] # get the 3rd item from the vector, uses 1st indexing
      ```

5. Data Structures
   - lists
   - trees
   - Vectors
   - tibble (data_frame data structure <- tidyverse package
      `tibble()` is a nice way to create data frames.
      - Printing
      - Subsetting
      - Recycling

<https://cran.r-project.org/web/packages/tibble/vignettes/tibble.html>

## Summarizing

```python
?summary # help for summary() function
summary(chocolateData) # summary function from base R (base R means no packages)
summarise_all(chocolateData, funs(mean)) # summary function from the Tidyverse (specifically dplyr), get mean of the data set
summarise_all(chocolateData, funs(sd)) # get standard deviation
```

A pipe, which looks like this: %>% is a special operator. It takes all the output from the right side and passes it to whatever is on the left side.

Let's take our chocolate dataset and then pipe it to the summarise() function. The summarise() function will return a data_frame, where each column contains a specific type of information we've asked for and has a name we've given in. In this example, we're going to get back two columns. One, called "averageRating" will have the average of the Rating column in it, while the second, called "sdRating" will have the standard deviation of the Rating column in it.

```python
# return a data_frame with the mean and sd of the Rating column, from the chocolate
# dataset in it
chocolateData %>%
      summarise(averageRating = mean(Rating),
               sdRating = sd(Rating))

# Return the average and sd of ratings by the year a rating was given
chocolateData %>%
      group_by(Review_Date) %>%
      summarise(averageRating = mean(Rating),
               sdRating = sd(Rating))
```

<https://www.youtube.com/watch?v=_V8eKsto3Ug>

## Others

### Tidyverse

The tidyverse is an opinionated [collection of R packages](https://www.tidyverse.org/packages) designed for data science. All packages share an underlying design philosophy, grammar, and data structures.

<https://www.tidyverse.org>

### Others

hadleyverse
