---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data
First, we got the songs we wanted to investigate from the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the board, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year $$\times$$ 62 years), which means 293,272 songs had multiple appearances on the Billboard 'Hot-100' list.

![](/images/billboard_py.png)

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). However, the LyricsGenius API does not collect the genres of the songs it collects, and thus we had to modify the code to allow us to collect genres as well:

```Python
def SomeShit(some, shit):
  return some += shit
````



# Preliminary investigation and cleaning



# Properties of the data

Create a nice table with links to download each data set...

|      Data Set     | Songs  | Size (mb) |
|:------------------|-------:|----------:|
|[Billboard List](#)| 29,128 | 1.6       |
|[Pre-cleaned](#)   | 29,128 | 92.5      |
|[Cleaned](#)       | 25,419 | 44,2      |
[Table caption, works as a reference][section-mmd-tables-table1]



