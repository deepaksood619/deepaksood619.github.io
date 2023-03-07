# Dict Evolution

Python2.7 - Scambled(dict_size = 280)

Python3.5 - Randomized (Key sharing dictionaries, dict_size = 196)

Python3.6 - Ordered (Compact dictionaries, dict_size = 112)

1. Databases

2. Association Lists

3. Separate Chaining

   - separate_chaining(2)

   - separate_chaining(4)

   - separate_chaining(8) (remove collisions, but wasted space due to over allocations for lists to grow)

4. Open Addressing

Can have catatrophic collision wherever every item hash to same value

5. Multiple Hashing

6. Key-Sharing Dict

7. Compact Dict

   - Use a list to store the lookups

   - This list can be read in very less cache-line

   - Use a dirty bit for lookup in the dictionary

## References

<https://www.youtube.com/watch?v=p33CVV29OG8>

<https://www.youtube.com/watch?v=npw4s1QTmPg>
