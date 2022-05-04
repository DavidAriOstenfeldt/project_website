---
title: Text analysis
prev: network-analysis
---

The lyrics retrieved from Genius.com provide a rich look into the language which has been used in mainstream music throughout the last sixty years. There is a lot to analyse which is why the page is divided into 3 separate sections. The first section goes over differences and similarities between genres. Next comes a section exposing the trends of each decade, and lastly, the reader is invited on a deep dive into the linguistic proficiency of the most successful artist in modern times.

# Genre
For the text part, we have chosen the following genres to inspect:
> pop, rock, rap, folk, blues, country, uk, funk and r&b

These genres were chosen as they were most popular through time, and they show interesting differences and trends that are worth looking into.
Pop in particular is an interesting genre. It is defined as a genre of popular music (they are different, although often used interchangeably) that started developing in the mid-1950s. Back then, pop music encompassed rock and roll, and they were largely synonomous until the 70s, at which point pop changed to became more accessible to wider audiences (source: [wikipedia](https://www.wikiwand.com/en/Pop_music)).

Let's start by inspecting the happiness of the different genres:

![](/images/genre_sentiment.png)

We can see that most genres tend to have the same sentiment. All genres of music we have identified fall between an average sentiment of 5.4 and 5.7, and as one would probably expect, rap and trap are at the lower end of that spectrum. However, all genres are still above the average sentiment of all the words in the [Hedonometer](https://www.wikiwand.com/en/Tf%E2%80%93idf) data.
# NOTE: Forklar hvad scoren betyder - de ligger allesammen mellem 5.4 og 5.7 ish?

Let's take a closer look at the words that are important for each genre. We do this by calculating a term frequency for inverse document frequencies (TF-IDF). What is that? Basically, it is a measure of how important a word is to a document in a collection. It increases every time the word appears in the document, and is then offset by the number of documents in the corpus that contains the word (for more see: [wikipedia](https://www.wikiwand.com/en/Tf%E2%80%93idf)). For us this means that our documents are the individual lyrics to each song, and our corpus is the total collection of lyrics in each genre.

Using the words deemed important by the TF-IDF we can create wordclouds to visualise them:

![](/images/genre_clouds.png)

Some interesting trends we can see:
{{< tabs >}}
{{< tab "Pop" >}}
  ### Pop
  [The pop genre](https://www.wikiwand.com/en/Pop_music) seems to typically be about love, heartbreak and partying. We see words such as "broken", "breaking", "fear" and "return" but also words such as "promised" and "amor". And then of course there are the party words: "chorus", "party", "fame" etc.

|    |  Word     |      TF   |     Word |   TFIDF  |
| --:| --:    | --:          |      --:    |        --:|
|1.  |know   |  0.0100   |        chorus| 0.00009   |
|2.  |love   |  0.0099   | miscellaneous |0.00007   |
|3.  |oh     |  0.0077   |        broken| 0.00006   |
|4.  |like   |  0.0077   |         party |0.00006   |
|5.  |got    |  0.0072   |      breaking |0.00006   |
|6.  |time  |   0.0070   |       breathe |0.00005   |
|7.  |go     |  0.0066   |       rainbow |0.00005   |
|8.  |one   |   0.0063   |        happen |0.00005   |
|9.  |na    |   0.0062   |         nigga |0.00005   |
|10. |see   |   0.0062   |        spoken| 0.00005   |
{{< /tab >}}


{{< tab "Folk" >}}
### Folk
[Folk music](https://www.wikiwand.com/en/Folk_music) is often about cultural or national identites. The words seem to suggest some type of wasted opportunity, with words such as "Annihilation", "squandered" and "pursuit" valued highest.

|     | Word |     TF |         Word |   TFIDF |
|-----|-----:|-------:|-------------:|--------:|
| 1.  | know | 0.0085 | annihilation | 0.00031 |
| 2.  | like | 0.0079 |   squandered | 0.00025 |
| 3.  | time | 0.0065 |       ragged | 0.00022 |
| 4.  |   wa | 0.0064 |       sunlit | 0.00021 |
| 5.  | love | 0.0063 |        birch | 0.00021 |
| 6.  |  one | 0.0057 |       knowed | 0.00021 |
| 7.  | come | 0.0056 |        canal | 0.00021 |
| 8.  |   go | 0.0055 |   suppertime | 0.00018 |
| 9.  |  say | 0.0052 |      pursuit | 0.00018 |
| 10. |  day | 0.0052 |    bojangles | 0.00018 |

{{< /tab >}}

{{< tab "Blues" >}}
### Blues
[Blues](https://www.wikiwand.com/en/Blues) originates from the deep south of the United States. Important words are "layla", "yakka" and enriched, although all the words seem to have the same importance. This could maybe be explained by the low amount of blues songs - only 149.

|     | Word |     TF |         Word |   TFIDF |
|-----|-----:|-------:|-------------:|--------:|
| 1.  | know | 0.0097 | layla | 0.0.00039 |
| 2.  |   oh | 0.0096 |   yakka | 0.00035 |
| 3.  | love | 0.0083 |       enriched  | 0.00035 |
| 4.  |  got | 0.0082 |       flaying  | 0.00035 |
| 5.  | baby | 0.0082 |        goanna  | 0.00035 |
| 6.  | like | 0.0076 |       conveniency  | 0.00035 |
| 7.  | yeah | 0.0073 |        alluded  | 0.00035 |
| 8.  |   go | 0.0069 |   pled  | 0.00035 |
| 9.  | time | 0.0068 |      seeped  | 0.00035 |
| 10. |   na | 0.0068 |    scroungy  | 0.00035 |

{{< /tab >}}

{{< tab "R&B" >}}
### R&B
[R&B](https://www.wikiwand.com/da/Rhythm_and_blues) stands for rhytm and blues. It encompasses a lot of genres and today a lot of rap and electronic dance music is classified as R&B as well. The important words are mostly slang terms used in african american communities, which makes sense as it originated in black communities in the 1940s.

|     | Word |     TF |   Word |   TFIDF |
|-----|-----:|-------:|-------:|--------:|
| 1.  | know | 0.0097 |  nigga | 0.00024 |
| 2.  | love | 0.0089 | shawty | 0.00015 |
| 3.  |   oh | 0.0083 | shorty | 0.00015 |
| 4.  | baby | 0.0080 |    wit | 0.00013 |
| 5.  |  got | 0.0079 |    hoe | 0.00012 |
| 6.  | yeah | 0.0077 |   crib | 0.00012 |
| 7.  | like | 0.0075 |  playa | 0.00011 |
| 8.  |   na | 0.0070 |  pussy | 0.00011 |
| 9.  |  get | 0.0067 |  booty | 0.00010 |
| 10. | time | 0.0066 |   dick | 0.00009 |

{{< /tab >}}


{{< tab "Country" >}}
### Country
[Country](https://www.wikiwand.com/en/Country_music) is a genre of music often associated with cowboy western music, living on a farm and driving tractors. The words deemed important reflect this, with "hillbilly" and "tailgate" ranking highest, followed by a bunch of other words often associated with farming.


|     | Word |     TF |       Word |   TFIDF |
|-----|-----:|-------:|-----------:|--------:|
| 1.  | know | 0.0084 |  hillbilly | 0.00021 |
| 2.  | like | 0.0082 |   tailgate | 0.00021 |
| 3.  | love | 0.0078 |    tractor | 0.00018 |
| 4.  |  got | 0.0070 |      porch | 0.00018 |
| 5.  | time | 0.0065 |    redneck | 0.00016 |
| 6.  |  one | 0.0062 | floorboard | 0.00013 |
| 7.  |   go | 0.0061 |       hank | 0.00013 |
| 8.  |  get | 0.0059 |     gravel | 0.00012 |
| 9.  |   wa | 0.0059 |   bocephus | 0.00012 |
| 10. | yeah | 0.0055 |   southern | 0.00012 |

{{< /tab >}}

{{< tab "Rock" >}}
### Rock
[Rock](https://www.wikiwand.com/en/Rock_music) originated in the 50s and 60s and took the world by storm, and it spawned a myriad of sub-genres. Rock seems to be amix of pop and country, and some other genres as well, as it contains much the same words.


|     | Word |     TF |       Word |   TFIDF |
|-----|-----:|-------:|-----------:|--------:|
| 1.  | know | 0.0092 |     broken | 0.00007 |
| 2.  | love | 0.0078 |    breathe | 0.00007 |
| 3.  | like | 0.0075 |   tailgate | 0.00006 |
| 4.  |  got | 0.0071 |       fear | 0.00006 |
| 5.  | time | 0.0067 |     sailor | 0.00006 |
| 6.  |   oh | 0.0066 |    redneck | 0.00005 |
| 7.  |   go | 0.0063 |   breaking | 0.00005 |
| 8.  |  get | 0.0060 |     escape | 0.00005 |
| 9.  |  one | 0.0060 |   southern | 0.00005 |
| 10. |  say | 0.0058 | floorboard | 0.00005 |

{{< /tab >}}

{{< tab "Rap" >}}
### Rap
[Rap](https://www.wikiwand.com/en/Hip_hop_music) is a music genre primarily developed by urban black communities in the United States. It has a certain vocal rhythm, almost more like a spoken song, compared to more traditional genres of music. The tone of rap is harsher than other genres, with a lot of derogatory names for women being a mainstay of the genre. Furthermore, often rappers are said to have "beef" with one-another, which is reflected in their songs.


|     | Word |     TF |   Word |   TFIDF |
|-----|-----:|-------:|-------:|--------:|
| 1.  | like | 0.0056 |  nigga | 0.00065 |
| 2.  |  got | 0.0055 |    hoe | 0.00046 |
| 3.  | know | 0.0052 |   dawg | 0.00037 |
| 4.  |  get | 0.0051 | rapper | 0.00031 |
| 5.  | yeah | 0.0044 |  bitch | 0.00028 |
| 6.  |   ai | 0.0044 |  pussy | 0.00027 |
| 7.  |   go | 0.0042 |   dick | 0.00027 |
| 8.  | back | 0.0038 |   opps | 0.00024 |
| 9.  | make | 0.0038 |   beef | 0.00023 |
| 10. |  see | 0.0038 |    wit | 0.00022 |

{{< /tab >}}

{{< tab "Funk" >}}
### Funk
[Funk](https://www.wikiwand.com/en/Funk) is a music genre that originated in the 1960s. The TFIDF seems to suggest that funky musicians simply reallo love to funk it up, with top words being: "funk", "funky" and "funkin".


|     | Word |     TF |    Word |   TFIDF |
|-----|-----:|-------:|--------:|--------:|
| 1.  | know | 0.0096 |   looka | 0.00042 |
| 2.  |   oh | 0.0089 |    funk | 0.00024 |
| 3.  | love | 0.0085 |   maceo | 0.00022 |
| 4.  |  got | 0.0085 |   funky | 0.00018 |
| 5.  |  get | 0.0080 |  funkin | 0.00016 |
| 6.  | yeah | 0.0079 |     wit | 0.00015 |
| 7.  | baby | 0.0076 |     jab | 0.00012 |
| 8.  | like | 0.0073 |  aflame | 0.00012 |
| 9.  |   na | 0.0072 | maganoo | 0.00012 |
| 10. | time | 0.0069 |   karat | 0.00012 |

{{< /tab >}}

{{< tab "UK" >}}
### UK
[UK](https://www.wikiwand.com/en/Grime_(music_genre)), or "grime" as it is often called, originated in the 2000s. It is primarily developed by british communities and as expected the most characteristic words for the genre are also british slang and ad-libs.


|     |  Word |     TF |         Word |   TFIDF |
|-----|------:|-------:|-------------:|--------:|
| 1.  |  know | 0.0094 |          mum | 0.00023 |
| 2.  |  love | 0.0082 |          cah | 0.00016 |
| 3.  |    oh | 0.0074 |       greaze | 0.00016 |
| 4.  |  like | 0.0073 |           uk | 0.00014 |
| 5.  |   got | 0.0066 | transmission | 0.00014 |
| 6.  |  time | 0.0064 |     arsehole | 0.00013 |
| 7.  |    go | 0.0062 |         blud | 0.00012 |
| 8.  |   see | 0.0057 |      paigons | 0.00012 |
| 9.  | never | 0.0057 |      krishna | 0.00012 |
| 10. |    ca | 0.0055 |          cuh | 0.00011 |

{{< /tab >}}

{{< /tabs >}}

# Decade
We now take a look at the music through the decades. We thus split our corpus by release year instead of by genre. Once again, we compute the TFIDF for each decade, and that leaves us with the following wordcloud:

![](/images/decade_wordcloud.png)



Some text about decades. Once again show wordclouds and comment on them.

Show the distribution of genres throughout the decades.

Show the dispersion plot.

Show sentiment pr month.

# artists
Some text about artists? All artists are used for tf-idf scores.

Goal: Summary statistics should be needly confined for each artist letting the reader click on the desired artist.

Summary statistics include:

> Wordcloud, sentiment (compared to dist), songs on top 100, top n most similar and dissimilar artists

Note: artist clouds may not be indicative of the average word usage by an artist. The wordclouds are most likely _skewed_ towards what is mainstream. It is far from all songs by an artist which reach top 100.

{{< tabs >}}
{{< tab "Pop" >}}
  {{< tabs >}}
  {{< tab "Ariana Grande" >}}
  ![](/images/ariana_grande.png)
  {{< spotify type="track" id="6ocbgoVGwYJhOv1GgI9NsF" width="50%" height="80" >}}
        
  
  ### Ariana Grande
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Beyoncé" >}}
  ![](/images/beyoncé.png)
  {{< spotify type="track" id="2CvOqDpQIMw69cCzWqr5yr" width="50%" height="80" >}}
  ### Beyoncé
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Billie Eilish" >}}
  ![](/images/billie_eilish.png)
  {{< spotify type="track" id="2Fxmhks0bxGSBdJ92vM42m" width="50%" height="80" >}}
  ### Billie Eilish
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Britney Spears" >}}
  ![](/images/britney_spears.png)
  {{< spotify type="track" id="6I9VzXrHxO9rA9A5euc8Ak" width="50%" height="80" >}}
  ### Britney Spears
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Cher" >}}
  ![](/images/cher.png)
  {{< spotify type="track" id="2goLsvvODILDzeeiT4dAoR" width="50%" height="80" >}}
  ### Cher
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Ed Sheeran" >}}
  ![](/images/ed_sheeran.png)
  {{< spotify type="track" id="0tgVpDi06FyKpA1z0VMD4v" width="50%" height="80" >}}
  ### Ed Sheeran
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Elton John" >}}
  ![](/images/elton_john.png)
  {{< spotify type="track" id="3gdewACMIVMEWVbyb8O9sY" width="50%" height="80" >}}
  ### Elton John
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Frank Sinatra" >}}
  ![](/images/frank_sinatra.png)
  {{< spotify type="track" id="2dR5WkrpwylTuT3jRWNufa" width="50%" height="80" >}}
  ### Frank Sinatra
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Justin Bieber" >}}
  ![](/images/justin_bieber.png)
  {{< spotify type="track" id="50kpGaPAhYJ3sGmk6vplg0" width="50%" height="80" >}}
  ### Justin Bieber
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Katy Perry" >}}
  ![](/images/katy_perry.png)
  {{< spotify type="track" id="4jbmgIyjGoXjY01XxatOx6" width="50%" height="80" >}}
  ### Katy Perry
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Madonna" >}}
  ![](/images/madonna.png)
  {{< spotify type="track" id="22sLuJYcvZOSoLLRYev1s5" width="50%" height="80" >}}
  ### Madonna
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Michael Jackson" >}}
  ![](/images/michael_jackson.png)
  {{< spotify type="track" id="5ChkMS8OtdzJeqyybCc9R5" width="50%" height="80" >}}
  ### Michael Jackson
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Miley Cyrus" >}}
  ![](/images/miley_cyrus.png)
  {{< spotify type="track" id="3E7dfMvvCLUddWissuqMwr" width="50%" height="80" >}}
  ### Miley Cyrus
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Taylor Swift" >}}
  ![](/images/taylor_swift.png)
  {{< spotify type="track" id="55n9yjI6qqXh5F2mYvUc2y" width="50%" height="80" >}}
  ### Taylor Swift
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "R&B" >}}
  {{< tabs >}}
  {{< tab "Aretha Franklin" >}}
  ![](/images/aretha_franklin.png)
  {{< spotify type="track" id="7s25THrKz86DM225dOYwnr" width="50%" height="80" >}}
  ### Aretha Franklin
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Chris Brown" >}}
  ![](/images/chris_brown.png)
  {{< spotify type="track" id="6XHVuErjQ4XNm6nDPVCxVX" width="50%" height="80" >}}
  ### Chris Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "James Brown" >}}
  ![](/images/james_brown.png)
  {{< spotify type="track" id="5XeSAezNDk9tuw3viiCbZ3" width="50%" height="80" >}}
  ### James Brown
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Marvin Gaye" >}}
  ![](/images/marvin_gaye.png)
  {{< spotify type="track" id="7tqhbajSfrz2F7E1Z75ASX" width="50%" height="80" >}}
  ### Marvin Gaye
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Prince" >}}
  ![](/images/prince.png)
  {{< spotify type="track" id="54X78diSLoUDI3joC2bjMz" width="50%" height="80" >}}
  ### Prince
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Stevie Wonder" >}}
  ![](/images/stevie_wonder.png)
  {{< spotify type="track" id="4N0TP4Rmj6QQezWV88ARNJ" width="50%" height="80" >}}
  ### Stevie Wonder
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Weeknd" >}}
  ![](/images/the_weeknd.png)
  {{< spotify type="track" id="0VjIjW4GlUZAMYd2vXMi3b" width="50%" height="80" >}}
  ### The Weeknd
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rap" >}}
  {{< tabs >}}
  {{< tab "DJ Khaled" >}}
  ![](/images/dj_khaled.png)
  {{< spotify type="track" id="3DXncPQOG4VBw3QHh3S817" width="50%" height="80" >}}
  ### DJ Khaled
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Drake" >}}
  ![](/images/drake.png)
  {{< spotify type="track" id="1zi7xx7UVEFkmKfv06H8x0" width="50%" height="80" >}}
  ### Inner Tab 1
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Eminem" >}}
  ![](/images/eminem.png)
  {{< spotify type="track" id="1v7L65Lzy0j0vdpRjJewt1" width="50%" height="80" >}}
  ### Eminem
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Future" >}}
  ![](/images/future.png)
  {{< spotify type="track" id="0VgkVdmE4gld66l8iyGjgx" width="50%" height="80" >}}
  ### Future
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "J. Cole" >}}
  ![](/images/j._cole.png)
  {{< spotify type="track" id="68Dni7IE4VyPkTOH9mRWHr" width="50%" height="80" >}}
  ### J. Cole
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Jay-Z" >}}
  ![](/images/jay-z.png)
  {{< spotify type="track" id="4Li2WHPkuyCdtmokzW2007" width="50%" height="80" >}}
  ### Jay-z
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Juice Wrld" >}}
  ![](/images/juice_wrld.png)
  {{< spotify type="track" id="285pBltuF7vW8TeWk8hdRR" width="50%" height="80" >}}
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Kanye West" >}}
  ![](/images/kanye_west.png)
  {{< spotify type="track" id="0j2T0R9dR9qdJYsB7ciXhf" width="50%" height="80" >}}
  ### Juice Wrld
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Baby" >}}
  ![](/images/lil_baby.png)
  {{< spotify type="track" id="78QR3Wp35dqAhFEc2qAGjE" width="50%" height="80" >}}
  ### Lil Baby
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Durk" >}}
  ![](/images/lil_durk.png)
  {{< spotify type="track" id="2SAqBLGA283SUiwJ3xOUVI" width="50%" height="80" >}}
  ### Lil Durk
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Uzi Vert" >}}
  ![](/images/lil_uzi_vert.png)
  {{< spotify type="track" id="7GX5flRQZVHRAGd6B4TmDO" width="50%" height="80" >}}
  ### Lil Uzi Vert
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Lil Wayne" >}}
  ![](/images/lil_wayne.png)
  {{< spotify type="track" id="5UsLjwBaTHBX4ektWIr4XX" width="50%" height="80" >}}
  ### Lil Wayne
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Nicki Minaj" >}}
  ![](/images/nicki_minaj.png)
  {{< spotify type="track" id="0dKg2vGC1hFqcK5LGTaKzX" width="50%" height="80" >}}
  ### Nicki Minaj
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Snoop Dogg" >}}
  ![](/images/snoop_dogg.png)
  {{< spotify type="track" id="3FNy4yzOhHhFBeA5p4ofoq" width="50%" height="80" >}}
  ### Snoop Dogg
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Travis Scott" >}}
  ![](/images/travis_scott.png)
  {{< spotify type="track" id="6gBFPUFcJLzWGx4lenP6h2" width="50%" height="80" >}}
  ### Travis Scott
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Young Thug" >}}
  ![](/images/young_thug.png)
  {{< spotify type="track" id="1IIKrJVP1C9N7iPtG6eOsK" width="50%" height="80" >}}
  ### Young Thug
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Youngboy Never Broke Again" >}}
  ![](/images/youngboy_never_broke_again.png)
  {{< spotify type="track" id="1oWM79mUVdZGCGYjSirHZR" width="50%" height="80" >}}
  ### Youngboy Never Broke Again
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rock" >}}
  {{< tabs >}}
  {{< tab "Elvis Presley" >}}
  ![](/images/elvis_presley.png)
  {{< spotify type="track" id="44AyOl4qVkzS48vBsbNXaC" width="50%" height="80" >}}
  ### Elvis Presley
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "Queen" >}}
  ![](/images/queen.png)
  {{< spotify type="track" id="4u7EnebtmKWzUH433cf5Qv" width="50%" height="80" >}}
  ### Queen
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< tab "The Beatles" >}}
  ![](/images/the_beatles.png)
  {{< spotify type="track" id="6dGnYIeXmHdcikdzNNDMm2" width="50%" height="80" >}}
  ### The Beatles
  This is an inner tab with a very long text, this text needs to be longer, still longer, still longer, still longer

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}
{{< /tabs >}}