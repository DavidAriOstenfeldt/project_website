---
title: Text analysis
prev: network-analysis
---

The lyrics retrieved from Genius.com provide a rich look into the language used in mainstream music throughout the last sixty years. There is a lot to analyse, so the page is divided into three sections. The first section goes over the differences and similarities between genres. Next comes a section exposing the trends of each decade, and lastly, the reader is invited on a deep dive into the linguistic proficiency of the most successful artist in modern times.


# Investigating each genre
For the text part, we have chosen the following genres to inspect:
> pop, rock, rap, folk, blues, country, uk, funk and r&b

These genres were chosen as they have been popular through time, cover a large portion of the world of music and show exciting differences and trends worth looking into.
Pop, in particular, is an interesting genre. It is defined as a genre of popular music (they are different, although often used interchangeably) that started developing in the mid-1950s. Back then, pop music encompassed rock and roll, and they were essentially synonymous until the 70s, at which point pop changed to become more accessible to wider audiences (source: [wikipedia](https://www.wikiwand.com/en/Pop_music)).

Let's look at what genres we listened to throughout the last six decades. The plot below shows the ratio between genres as a % of the total amount of genres. Note that not all genres are included, but only a pre-selected list of genres.


![](/images/genre_per_decade.png)

We can clearly see that over 50% of all music on the Billboard 'Hot-100' list was pop, with rock starting out on second and R&B and blues coming in on third and fourth. In 1990 R&B would take over as second, but more notably, rap would become the third most represented genre on the list, rising from almost 0 the decade before. The popularity of rap would increase until it, in 2010, overtook pop music as the most represented genre on the 'Hot-100' list. In 2020, we were also seeing trap music overtake pop.

Now, let's inspect the happiness of the different genres:

![](/images/genre_sentiment.png)

We can see that most genres tend to have the same sentiment. All genres of music we have identified fall between an average sentiment of 5.4 and 5.7, and as one would probably expect, rap and trap are at the lower end of that spectrum. However, all genres are still above the average sentiment of all the words in the [Hedonometer](https://hedonometer.org/timeseries/en_all/?from=2020-11-06&to=2022-05-05) data. The hedonometer score is assigned from a range of (1) sad to (9) happy. Many profanities fall in the range between 4 - 6, because of the uncertainty of the context they are used in.

Let's take a closer look at the important words for each genre. We do this by calculating a term frequency for inverse document frequencies (TF-IDF). What is that? Basically, it measures how important and unique a word is to a document in a collection of documents (corpus). The TF-IDF score becomes larger when a word appears frequently in the document, and it becomes smaller when the word is common in the corpus, e.g. appears in many of the other documents. (for more, see: [explainer notebook](https://davidariostenfeldt.github.io/project_website/explainer-notebook.html) or [wikipedia](https://www.wikiwand.com/en/Tf%E2%80%93idf)). TF-IDF is used instead of simply the term frequency because many words are common across the entire corpus, and will not show much, except the most commonly used words.

Using the words deemed important by the TF-IDF, we can create a representation of the scores with wordclouds:

![](/images/genre_clouds.png)

Some interesting trends we can see:
{{< tabs >}}
{{< tab "Pop" >}}
  [The pop genre](https://www.wikiwand.com/en/Pop_music) seems to be about love, heartbreak and partying typically. We see words such as _broken_, _breaking_, _fear_ and _return_ but also words such as _promised_ and _amor_. And then, of course, there are the party words: _chorus_, _party_, _fame_ etc.
<div class="row">
  <div class="column_table">

|     |  Word |     TF |          Word |   TFIDF |
|-----|------:|-------:|--------------:|--------:|
| 1.  |  know | 0.0100 |        chorus | 0.00009 |
| 2.  |  love | 0.0099 | miscellaneous | 0.00007 |
| 3.  |    oh | 0.0077 |        broken | 0.00006 |
| 4.  |  like | 0.0077 |         party | 0.00006 |
| 5.  |   got | 0.0072 |      breaking | 0.00006 |
| 6.  |  time | 0.0070 |       breathe | 0.00005 |
| 7.  |    go | 0.0066 |       rainbow | 0.00005 |
| 8.  |   one | 0.0063 |        happen | 0.00005 |
| 9.  |    na | 0.0062 |         nigga | 0.00005 |
| 10. |   see | 0.0062 |        spoken | 0.00005 |
  </div>
  <div class="column">
    <img src="/images/genres/pop.png">
  </div>
</div>
{{< /tab >}}


{{< tab "Folk" >}}
[Folk music](https://www.wikiwand.com/en/Folk_music) is often about cultural or national identities. The words seem to suggest some wasted opportunity, with words such as _annihilation_, _squandered_ and _pursuit_ valued highest.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/folk.png">
  </div>
</div>
{{< /tab >}}

{{< tab "Blues" >}}
[Blues](https://www.wikiwand.com/en/Blues) originates from the deep south of the United States. Important words are _layla_, _yakka_ and enriched, although all the words seem to have the same importance. This could be explained by the low number of blues songs - only 149.
<div class="row">
  <div class="column_table">

|     | Word |     TF |        Word |    TFIDF |
|-----|-----:|-------:|------------:|---------:|
| 1.  | know | 0.0097 |       layla |  0.00039 |
| 2.  |   oh | 0.0096 |       yakka |  0.00035 |
| 3.  | love | 0.0083 |    enriched |  0.00035 |
| 4.  |  got | 0.0082 |     flaying |  0.00035 |
| 5.  | baby | 0.0082 |      goanna |  0.00035 |
| 6.  | like | 0.0076 | conveniency |  0.00035 |
| 7.  | yeah | 0.0073 |     alluded |  0.00035 |
| 8.  |   go | 0.0069 |        pled |  0.00035 |
| 9.  | time | 0.0068 |      seeped |  0.00035 |
| 10. |   na | 0.0068 |    scroungy |  0.00035 |
  </div>
  <div class="column">
    <img src="/images/genres/blues.png">
  </div>
</div>
{{< /tab >}}

{{< tab "R&B" >}}
[R&B](https://www.wikiwand.com/da/Rhythm_and_blues) stands for rhythm and blues. It encompasses a lot of genres, and today a lot of rap and electronic dance music is classified as R&B as well. The important words are mostly slang terms used in African American communities, which makes sense as it originated in black communities in the 1940s.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/r&b.png">
  </div>
</div>
{{< /tab >}}


{{< tab "Country" >}}
[Country](https://www.wikiwand.com/en/Country_music) is a genre of music often associated with western cowboy music, living on a farm and driving tractors. The words deemed important reflect this, with _hillbilly_ and _tailgate_ ranking highest, followed by a bunch of other terms often associated with farming. It is definitely safe to say that the country genre lives up to the stereotype.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/country.png">
  </div>
</div>
{{< /tab >}}

{{< tab "Rock" >}}
[Rock](https://www.wikiwand.com/en/Rock_music) originated in the 50s and 60s and took the world by storm, and it spawned a myriad of sub-genres. Rock seems to be a mix of pop, country, and some other genres, as it contains much of the same words. The many variations of 'break' implies that hardships in life is a common topic.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/rock.png">
  </div>
</div>
{{< /tab >}}

{{< tab "Rap" >}}
[Rap](https://www.wikiwand.com/en/Hip_hop_music) is a music genre primarily developed by urban black communities in the United States. It has a certain vocal rhythm, almost more like a spoken song, compared to more traditional genres of music. The tone of rap is harsher than in other genres, with many derogatory names for women being a mainstay of the genre. Furthermore, often rappers are said to have _beef_ with one another, which is reflected in their songs.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/rap.png">
  </div>
</div>
{{< /tab >}}

{{< tab "Funk" >}}
[Funk](https://www.wikiwand.com/en/Funk) is a music genre that originated in the 1960s. The TF-IDF suggests that funky musicians simply love to funk it up, with top words being _funk_, _funky_ and _funkin_.
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/funk.png">
  </div>
</div>
{{< /tab >}}

{{< tab "UK" >}}
[UK](https://www.wikiwand.com/en/Grime_(music_genre)), or "grime" as it is often called, originated in the 2000s. British communities primarily develop it, and as expected, the most characteristic words for the genre are British slang and ad-libs. Specifically, _cah_ means because, _blud_ means friend and _paigon_ means opponent. 
<div class="row">
  <div class="column_table">

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
  </div>
  <div class="column">
    <img src="/images/genres/uk.png">
  </div>
</div>
{{< /tab >}}

{{< /tabs >}}

# Music through the decades
We now take a look at the music through the decades. We start by looking at the sentiment through the years.

![](/images/decade_sentiment.png)

We see much the same trend as with decades - higher sentiment values in the early decades than in the later. This is probably explained by the rise of rap and hip hop from the 90s and onwards. Let's also try to look at the sentiment more closely:

![](/images/rolling_sentiment.png)

We can see much the same trend here as in the above plot. However, it is clear that there are spikes in sentiment, going both up and down. However, it is important to note that almost all songs are still above the average sentiment from labMT, which could indicate that generally, we just prefer to listen to happier music since all the songs we are investigating are only taken from the 'Hot-100' list.

To look at the lyrics used through the years, we split our corpus by release year instead of by genre. Once again, we compute the TF-IDF for each decade, and that leaves us with the following wordclouds:

<div class="row">
    <div class="column_img">
      <img class="decade" src="/images/decades/1960.png">
    </div>
    <div class="column_img">
      <img class="decade" src="/images/decades/1970.png">
    </div>
    <div class="column_img">
      <img class="decade" src="/images/decades/1980.png">
    </div>
</div>
<div class="row">
    <div class="column_img">
      <img class="decade" src="/images/decades/1990.png">
    </div>
    <div class="column_img">
      <img class="decade" src="/images/decades/2000.png">
    </div>
    <div class="column_img">
      <img class="decade" src="/images/decades/2010.png">
    </div>
    <div class="column_img">
      <img class="decade" src="/images/decades/2020.png">
    </div>
</div>

The words which according to the TF-IDF score define each decade are vastly different when dividing the decades according to the two rows in the above figure. The 60s, 70s and 80s all contain words which are completely normal words which everyone might use in their everyday life. Some perhaps more expressive and expressive than ordinary speech, but still real words. Some quite romantic words like _tenderly_ and _gentleness_ are also used. The wordclouds of the 10s and 20s are the polar opposite to this. One has to search the clouds quite extensively to find words which appear in the dictionary. All the important words are ad-libs used for rhythm in rap songs and slang. The 90s and 00s mark the transition between the two extremes. It is evident that as rap emerged, calling out artist names became more common. Further description of the wordclouds can be seen below.

{{< tabs >}}
{{< tab "1960" >}}
[The 1960s](https://www.wikiwand.com/en/1960s_in_music) were quite revolutionary for music. Rock was becoming more evolved, and artists were beginning to release more albums than singles. 
Looking at the defining words of the decade, a lot of people seemed to enjoy partaking in the [watusi dance](https://www.wikiwand.com/en/Watusi_(dance)). Furthermore, songs were affectionate, using words such as _tenderly_ and _fickle_. 
<div class="row">
  <div class="column_table">

|     | Word |     TF |     Word |   TFIDF |
|-----|-----:|-------:|---------:|--------:|
| 1.  | love | 0.0122 |   watusi | 0.00011 |
| 2.  | know | 0.0103 | tenderly | 0.00009 |
| 3.  |   oh | 0.0083 |    looka | 0.00007 |
| 4.  |   go | 0.0069 |   sighin | 0.00007 |
| 5.  |  got | 0.0069 |    hully | 0.00006 |
| 6.  | like | 0.0068 |    rovin | 0.00006 |
| 7.  | come | 0.0067 |   billow | 0.00006 |
| 8.  |  one | 0.0066 |   fickle | 0.00005 |
| 9.  | baby | 0.0065 |    twine | 0.00005 |
| 10. | time | 0.0064 |  doggone | 0.00005 |
  </div>
  <div class="column">
    <img src="/images/decades/1960.png">
  </div>
</div>

{{< /tab >}}

{{< tab "1970" >}}
[The 1970s](https://www.wikiwand.com/en/1970s_in_music) are probably best known for the rise and popularity of disco. If you simply look at the TF-IDF scores of the lyrics, you might believe that _nigger_ was the most defining word of the decade. However, five different songs in 1970 had the word appear in them (in mostly provoking context), and it does not appear in any other decade. Another interesting word is _doggone_, whose modern counterpart you might be more familiar with - _damn_.
<div class="row">
  <div class="column_table">

|     | Word |     TF |       Word |   TFIDF |
|-----|-----:|-------:|-----------:|--------:|
| 1.  | know | 0.0099 |     nigger | 0.00006 |
| 2.  | love | 0.0098 |    doggone | 0.00005 |
| 3.  |  got | 0.0079 | gentleness | 0.00005 |
| 4.  |   oh | 0.0078 |       toad | 0.00004 |
| 5.  | like | 0.0073 |     unkind | 0.00004 |
| 6.  | time | 0.0071 |     salina | 0.00004 |
| 7.  |  get | 0.0065 | thoughtful | 0.00004 |
| 8.  | come | 0.0063 |   softness | 0.00004 |
| 9.  |   go | 0.0062 |    crowing | 0.00004 |
| 10. |   na | 0.0061 |   marianne | 0.00004 |
  </div>
  <div class="column">
    <img src="/images/decades/1970.png">
  </div>
</div>
{{< /tab >}}

{{< tab "1980" >}}
[The 1980s](https://www.wikiwand.com/en/1980s_in_music) had the rise of electronic dance music and modern rock. Most of the important words from this decade appear to be quite normal at a glance. Apparently, musicians really liked jellybeans in the 80s!
<div class="row">
  <div class="column_table">

|     | Word |     TF |          Word |   TFIDF |
|-----|-----:|-------:|--------------:|--------:|
| 1.  | know | 0.0100 |      glancing | 0.00005 |
| 2.  | love | 0.0098 | temperamental | 0.00005 |
| 3.  | time | 0.0078 |   marketplace | 0.00004 |
| 4.  |  got | 0.0074 |       untried | 0.00004 |
| 5.  |   oh | 0.0072 |     jellybean | 0.00004 |
| 6.  | like | 0.0072 |     sightless | 0.00004 |
| 7.  |  one | 0.0065 |       trouper | 0.00004 |
| 8.  |   go | 0.0064 |      outgrown | 0.00004 |
| 9.  |  say | 0.0063 |       frantic | 0.00004 |
| 10. |  get | 0.0063 |           oho | 0.00003 |
  </div>
  <div class="column">
    <img src="/images/decades/1980.png">
  </div>
</div>
{{< /tab >}}

{{< tab "1990" >}}
[The 1990s](https://www.wikiwand.com/en/1990s_in_music) truly saw the rise in hip-hop/rap. Many of the words here are slang terms, used mainly in rap.
<div class="row">
  <div class="column_table">

|     | Word |     TF |        Word |   TFIDF |
|-----|-----:|-------:|------------:|--------:|
| 1.  | know | 0.0076 |     cristal | 0.00009 |
| 2.  | love | 0.0066 |        quik | 0.00008 |
| 3.  | like | 0.0064 |        dank | 0.00008 |
| 4.  | time | 0.0060 |     phillie | 0.00007 |
| 5.  |  got | 0.0059 |       floss | 0.00007 |
| 6.  |  get | 0.0053 |    buckwild | 0.00007 |
| 7.  | make | 0.0053 |       betta | 0.00006 |
| 8.  |  see | 0.0053 | representin | 0.00006 |
| 9.  |   na | 0.0053 |     ballers | 0.00006 |
| 10. |   go | 0.0052 |        rump | 0.00006 |
  </div>
  <div class="column">
    <img src="/images/decades/1990.png">
  </div>
</div>
{{< /tab >}}

{{< tab "2000" >}}
[The 2000s](https://www.wikiwand.com/en/2000s_in_music) were indeed a mixed year. All genres saw a healthy consumption, but particularly teen pop and rap got increased participation. This is the decade where slang truly started taking over the lyrics of the music we listen to with words such as _swag_, _shorty_ and its variation _shawty_. Also some artists and producers names appear. For example, [_luda_ and _cris_](https://www.wikiwand.com/en/Ludacris) and [_darkchild_](https://www.wikiwand.com/en/darkchild).
<div class="row">
  <div class="column_table">

|     | Word |     TF |      Word |   TFIDF |
|-----|-----:|-------:|----------:|--------:|
| 1.  | know | 0.0074 |     crunk | 0.00013 |
| 2.  | like | 0.0069 |      luda | 0.00013 |
| 3.  |  got | 0.0063 |    shorty | 0.00011 |
| 4.  |  get | 0.0058 |      cris | 0.00010 |
| 5.  |   go | 0.0055 |    shawty | 0.00010 |
| 6.  | love | 0.0054 |      swag | 0.00009 |
| 7.  |  see | 0.0053 | darkchild | 0.00008 |
| 8.  |   na | 0.0052 |   konvict | 0.00008 |
| 9.  | yeah | 0.0052 |       dro | 0.00007 |
| 10. |  one | 0.0051 |     titty | 0.00007 |
  </div>
  <div class="column">
    <img src="/images/decades/2000.png">
  </div>
</div>
{{< /tab >}}

{{< tab "2010" >}}
[The 2010s](https://www.wikiwand.com/en/2010s_in_music) had increased popularity in a hushed style of vocal delivery (dubbed _whisperpop_) as well as a steep rise in traditional instruments: Ukuleles, banjos, mandolins and bongos from indie-rock bands. Most notably, however, is probably the growth of hip hop, dominating most charts. Ad-libs played a massive role in the 10s, and we saw the introduction of social media sites such as _Instagram_ to the vocabulary of the artists.
<div class="row">
  <div class="column_table">

|     | Word |     TF |      Word |   TFIDF |
|-----|-----:|-------:|----------:|--------:|
| 1.  | like | 0.0070 |    wraith | 0.00028 |
| 2.  | know | 0.0066 |     skrrt | 0.00027 |
| 3.  |  got | 0.0063 |       ayy | 0.00022 |
| 4.  | yeah | 0.0057 |      brrt | 0.00019 |
| 5.  |  get | 0.0056 | instagram | 0.00017 |
| 6.  |   go | 0.0051 |      thot | 0.00016 |
| 7.  |   na | 0.0047 |      swag | 0.00013 |
| 8.  | love | 0.0046 |   maybach | 0.00013 |
| 9.  | time | 0.0045 |    hunnid | 0.00012 |
| 10. | make | 0.0044 |       bae | 0.00012 |
  </div>
  <div class="column">
    <img src="/images/decades/2010.png">
  </div>
</div>
{{< /tab >}}

{{< tab "2020" >}}
Although [the 2020s](https://www.wikiwand.com/en/2020s_in_music) are still young, we can see a clear trend in ad-libbing. The words getting the largest TF-IDF scores are ad-libs, and they have become a huge part of our daily listening. Through the lens of a grandparent the words understandably may seem like gibberish.
<div class="row">
  <div class="column_table">

|     | Word |     TF |   Word |   TFIDF |
|-----|-----:|-------:|-------:|--------:|
| 1.  | like | 0.0064 |    opp | 0.00069 |
| 2.  |  got | 0.0061 |  skrrt | 0.00048 |
| 3.  | know | 0.0060 |   opps | 0.00047 |
| 4.  | yeah | 0.0057 |    ayy | 0.00035 |
| 5.  |  get | 0.0055 |   brrt | 0.00034 |
| 6.  |   ai | 0.0047 |   baow | 0.00033 |
| 7.  |   go | 0.0047 |  grrah | 0.00031 |
| 8.  |   wa | 0.0045 | wraith | 0.00030 |
| 9.  |   ca | 0.0042 |  draco | 0.00030 |
| 10. |  one | 0.0042 | hunnid | 0.00029 |
  </div>
  <div class="column">
    <img src="/images/decades/2020.png">
  </div>
</div>
{{< /tab >}}
{{< /tabs >}}

We investigated some select words from these and made a dispersion plot to see how their use changed through the decades.

![](/images/dispersion.png)

Let's go through some of the words:  
`Swag`: The popularity of swag happened in the 00s and ended around the 10s. Few people still use it today, but the amount has declined steeply.  
`Shawty`: A popular term for a young woman. Prevalent in rap, hip-hop and r&b music.  
`Boogie` and `funky`: Boogie was a popular genre of music at the end of the disco era of the 70s. On the dispersion plot it appears as if funk and boogie had a short revival in the 90's as well.  
`Darling` and `bitch`: Two words often used to describe women, but with very different meanings. It is interesting to see how their popularity is almost the opposite, with darling being phased out as bitch is being phased in. In a sense they display the transition from old-school pop and soul to modern pop and rab.  
`Drug`: Singing about drugs is a staple in rap music, and it is not surprising to see its popularity increase through the 90s.  
`Skrrt`: A popular ad-lib used in most rap/trap songs.  
`Nigga`: Often used in rap music, which saw a steep increase in popularity from its inception in the 90s, which is denoted as 'the golden age of rap' and has become a staple in most rap music.



# Inspecting individual artists
41 highly influential artists by the number of songs on the Billboard 'Hot-100' chart are split over four genres in the tabs below. Each artist has an associated word cloud, created from their TF-IDF scores and a similarity score that indicates which other artists are most similar to the given artist, based on the lyrics in our corpus. The TF-IDF scores were calculated using all artists. Finally, the average sentiment of the artist is presented with a comparison of all artists and top artists.

One funny aspect of the word clouds is that most modern artists have their own name as one of the most significant words. This could be because they use tags in their songs, like DJ Khaled's iconic "It's DJ Khaled" to promote themselves. Another explanation could be that when artists collaborate on a song, they often mention each other by name. Since the entire song is attributed to the artist and not just the part they wrote/sang, these lyrics will also be part of their TF-IDF scores. Either way, it is a tendency which is not shared by the old artists. Perhaps, back in the day back in the day when the competition in the music industry was not as fierce and fewer collaborations took place, artists did not need to include their names in the lyrics to be remembered.

Let's take a closer look at Four artists: _Ariana Grande_, _Drake_ and _Juice Wrld_ and _The Beatles_.

#### Ariana Grande
[Ariana Grande](https://www.wikiwand.com/en/Ariana_Grande) is a pop singer who went from starring in a Nickelodeon tv series to topping the Billboard charts with her debut album _Yours Truly_ in 2013. Since then, she has continued to top the charts with every new release and has won numerous awards from various outlets. Today, she has had 68 songs appear on the Billboard 'Hot-100' chart.

Her word cloud reflects her style of humming and vocalizing, with top words being _mmm_, _woah_, _ayy_ and _yee_. Her sentiment is pretty much right in the middle of everyone.

The top similar artists are Justin Bieber, Chris Brown, The Weeknd, Drake and Rihanna. All of these have heavy pop and R&B connections, which is what Ariana Grande excels at.

#### Drake
[Drake](https://www.wikiwand.com/en/Drake_(musician)) is one of the most famous musicians living today. He has had the highest amount of songs on the Billboard 'Hot-100' list, coming in at 253 songs, almost 100 more than the runner-up. He is most well known for his rap songs. He debuted with his mixtape _Room for Improvement_ in 2006. in 2018 he released _Scorpion_, which had three Billboard 'Hot-100' number one singles: _God's plan_, _Nice for What_ and _In My Feelings_.

His word cloud appears to have pretty common words from the rap genre (according to the rap word cloud from earlier). The term _Drizzy_ appears, which is a nickname that he often uses to [refer to himself with](https://twitter.com/drake).

The most similar artists to him are other rappers. Lil Wayne, Kanye West, Lil Baby, Future and Nicki Minaj are all highly respected rappers, and he has worked together with them in the past.

His sentiment is average compared to the other artists, although he is skewing a tiny bit to the lower side - a common trait amongst all rappers.

#### Juice Wrld
[Juice Wrld](https://www.wikiwand.com/en/Juice_Wrld) was a rapper who pioneered the emo-rap and SoundCloud rap subgenres. In 2018 he released his hit single _Lucid Dreams_, which took the number two spot on Billboard's 'Hot-100' chart. Juice Wrld has had 70 songs appear on the chart. He mainly collaborated with other rappers: Drake, Future and the trio of Lils: Lil Wayne, Lil Uzi Vert and Lil Baby. All prominent names in the rap industry.

Juice Wrld tended to sing about battling demons and doing all types of drugs, which is also reflected in his word cloud.

His sentiment is comparatively low, and his songs were often associated with turmoil, heartbreak and fragmented feelings.

#### The Beatles
[The Beatles](https://www.wikiwand.com/en/The_Beatles) were an English rock band formed in 1960. They are often regarded as the most influential band of all time, and played a huge role pop musics' recognition as a proper art form. Their sentiment is comparatively on the high end, and they share similarity with other famous musicians from the same time period: _Aretha Franklin_, _Elvis Presley_, _Ray Charles_. 

Their defining words are classic English/British terms: _knickers_, _joob_, _gloucester_ etc.

The Beatles has had 65 songs on the 'Hot-100' list, and were one of the first bands to experience the hyper-fan culture, with many calling the period of time they were active a period of _beatlemania_.

We invite you to go through the tabs and see if you can recognise some of the artists and their similar artists or most defining words.

>Note: Artist clouds may not indicate the average word usage by an artist. The word clouds are most likely _skewed_ towards what is mainstream, as it is far from all songs by an artist which reach the top 100.


<link rel="stylesheet" type="text/css" href="/css/style.css">

{{< tabs >}}
{{< tab "Pop" >}}
  {{< tabs >}}
  {{< tab "Ariana Grande" >}}  
  
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/ariana grande.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.615</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.604</td>
        </tr>
        <tr>
          <td>The Weeknd</td>
          <td>0.594</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.584</td>
        </tr>
        <tr>
          <td>Rihanna</td>
          <td>0.558</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 68</h1>
      <img src="/images/artists/ariana_grande.png">
    </div>
  </div>
    {{< spotify type="track" id="6ocbgoVGwYJhOv1GgI9NsF" width="50%" height="80" >}}
  

  
  {{< /tab >}}
  {{< tab "Beyoncé" >}}
  
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/beyoncé.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Jay-Z</td>
          <td>0.617</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.594</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.591</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.582</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.557</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 64</h1>
      <img src="/images/artists/beyoncé.png">
    </div>
  </div>
    {{< spotify type="track" id="2CvOqDpQIMw69cCzWqr5yr" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Billie Eilish" >}}
  
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/billie eilish.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.432</td>
        </tr>
        <tr>
          <td>Ariana Grande</td>
          <td>0.417</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.414</td>
        </tr>
        <tr>
          <td>The Weeknd</td>
          <td>0.390</td>
        </tr>
        <tr>
          <td>Demi Lovato</td>
          <td>0.384</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 30</h1>
      <img src="/images/artists/billie_eilish.png">
    </div>
  </div>
    {{< spotify type="track" id="2Fxmhks0bxGSBdJ92vM42m" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Britney Spears" >}}
  
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/britney spears.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.494</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.471</td>
        </tr>
        <tr>
          <td>Rihanna</td>
          <td>0.457</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.457</td>
        </tr>
        <tr>
          <td>Ariana Grande</td>
          <td>0.455</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 34</h1>
      <img src="/images/artists/britney_spears.png">
    </div>
  </div>  
  {{< spotify type="track" id="6I9VzXrHxO9rA9A5euc8Ak" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Cher" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/cher.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Sonny</td>
          <td>0.726</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.558</td>
        </tr>
        <tr>
          <td>Dionne Warwick</td>
          <td>0.546</td>
        </tr>
        <tr>
          <td>Elvis Presley</td>
          <td>0.538</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.522</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 50</h1>
      <img src="/images/artists/cher.png">
    </div>
  </div>
  {{< spotify type="track" id="2goLsvvODILDzeeiT4dAoR" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Ed Sheeran" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/ed sheeran.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.575</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.526</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.512</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.490</td>
        </tr>
        <tr>
          <td>The Weekend</td>
          <td>0.490</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 48</h1>
      <img src="/images/artists/ed_sheeran.png">
    </div>
  </div>
  {{< spotify type="track" id="0tgVpDi06FyKpA1z0VMD4v" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Elton John" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/elton john.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.528</td>
        </tr>
        <tr>
          <td>George Michael</td>
          <td>0.509</td>
        </tr>
        <tr>
          <td>Keith Urban</td>
          <td>0.483</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.481</td>
        </tr>
        <tr>
          <td>Tim Mcgraw</td>
          <td>0.479</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 64</h1>
      <img src="/images/artists/elton_john.png">
    </div>
  </div>
  {{< spotify type="track" id="3gdewACMIVMEWVbyb8O9sY" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Frank Sinatra" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/frank sinatra.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Elvis Presley</td>
          <td>0.442</td>
        </tr>
        <tr>
          <td>Dionne Warwick</td>
          <td>0.422</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.420</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.401</td>
        </tr>
        <tr>
          <td>Neil Diamond</td>
          <td>0.400</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 39</h1>
      <img src="/images/artists/frank_sinatra.png">
    </div>
  </div>
  {{< spotify type="track" id="2dR5WkrpwylTuT3jRWNufa" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Justin Bieber" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/justin bieber.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Ariana Grande</td>
          <td>0.615</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.615</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.610</td>
        </tr>
        <tr>
          <td>The Weekend</td>
          <td>0.606</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.599</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 97</h1>
      <img src="/images/artists/justin_bieber.png">
    </div>
  </div>
  {{< spotify type="track" id="50kpGaPAhYJ3sGmk6vplg0" width="50%" height="80" >}} 

  {{< /tab >}}
  {{< tab "Katy Perry" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/katy perry.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.462</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.447</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.424</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.424</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.414</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 34</h1>
      <img src="/images/artists/katy_perry.png">
    </div>
  </div>
  {{< spotify type="track" id="4jbmgIyjGoXjY01XxatOx6" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Madonna" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/madonna.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.541</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.522</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.508</td>
        </tr>
        <tr>
          <td>Diana Ross</td>
          <td>0.507</td>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.498</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 53</h1>
      <img src="/images/artists/madonna.png">
    </div>
  </div>
  {{< spotify type="track" id="22sLuJYcvZOSoLLRYev1s5" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Michael Jackson" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/michael jackson.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.494</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.488</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.486</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.482</td>
        </tr>
        <tr>
          <td>Diana Ross</td>
          <td>0.473</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100':  47</h1>
      <img src="/images/artists/michael_jackson.png">
    </div>
  </div>
  {{< spotify type="track" id="5ChkMS8OtdzJeqyybCc9R5" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Miley Cyrus" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/miley cyrus.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.517</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.510</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.479</td>
        </tr>
        <tr>
          <td>The Weekend</td>
          <td>0.476</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.475</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100':  33</h1>
      <img src="/images/artists/miley_cyrus.png">
    </div>
  </div>
  {{< spotify type="track" id="3E7dfMvvCLUddWissuqMwr" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Taylor Swift" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/taylor swift.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.615</td>
        </tr>
        <tr>
          <td>Keith Urban</td>
          <td>0.589</td>
        </tr>
        <tr>
          <td>Kenny Chesney</td>
          <td>0.578</td>
        </tr>
        <tr>
          <td>Tim Mcgraw</td>
          <td>0.578</td>
        </tr>
        <tr>
          <td>Ed Sheeran</td>
          <td>0.575</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 161</h1>
      <img src="/images/artists/taylor_swift.png">
    </div>
  </div>
  {{< spotify type="track" id="55n9yjI6qqXh5F2mYvUc2y" width="50%" height="80" >}}
  
  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "R&B" >}}
  {{< tabs >}}
  {{< tab "Aretha Franklin" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/aretha franklin.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Marvin Gaye</td>
          <td>0.593</td>
        </tr>
        <tr>
          <td>Elvis Presley</td>
          <td>0.567</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.565</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.555</td>
        </tr>
        <tr>
          <td>Diana Ross</td>
          <td>0.549</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 68</h1>
      <img src="/images/artists/aretha_franklin.png">
    </div>
  </div>
  {{< spotify type="track" id="7s25THrKz86DM225dOYwnr" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Chris Brown" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/chris brown.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.722</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.704</td>
        </tr>
        <tr>
          <td>Nicki Minaj</td>
          <td>0.677</td>
        </tr>
        <tr>
          <td>T-Pain</td>
          <td>0.659</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.656</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 102</h1>
      <img src="/images/artists/chris_brown.png">
    </div>
  </div>
  {{< spotify type="track" id="6XHVuErjQ4XNm6nDPVCxVX" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "James Brown" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/james brown.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>The Famous Flames</td>
          <td>0.789</td>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.459</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.418</td>
        </tr>
        <tr>
          <td>Wilson Pickett</td>
          <td>0.417</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.409</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 69</h1>
      <img src="/images/artists/james_brown.png">
    </div>
  </div>
  {{< spotify type="track" id="5XeSAezNDk9tuw3viiCbZ3" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Marvin Gaye" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/marvin gaye.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Tammi Terrell</td>
          <td>0.667</td>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.593</td>
        </tr>
        <tr>
          <td>Diana Ross</td>
          <td>0.556</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.528</td>
        </tr>
        <tr>
          <td>The Four Tops</td>
          <td>0.528</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 52</h1>
      <img src="/images/artists/marvin_gaye.png">
    </div>
  </div>
  {{< spotify type="track" id="7tqhbajSfrz2F7E1Z75ASX" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Prince" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/prince.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.478</td>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.477</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.468</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.459</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.444</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 27</h1>
      <img src="/images/artists/prince.png">
    </div>
  </div>
  {{< spotify type="track" id="54X78diSLoUDI3joC2bjMz" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Stevie Wonder" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/stevie wonder.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.565</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.555</td>
        </tr>
        <tr>
          <td>Dionne Warwick</td>
          <td>0.540</td>
        </tr>
        <tr>
          <td>Elvis Presley</td>
          <td>0.539</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.538</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 65</h1>
      <img src="/images/artists/stevie_wonder.png">
    </div>
  </div>
  {{< spotify type="track" id="4N0TP4Rmj6QQezWV88ARNJ" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "The Weeknd" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/the weeknd.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.661</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.635</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.619</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.606</td>
        </tr>
        <tr>
          <td>Ariana Grande</td>
          <td>0.594</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 94</h1>
      <img src="/images/artists/the_weeknd.png">
    </div>
  </div>
  {{< spotify type="track" id="0VjIjW4GlUZAMYd2vXMi3b" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rap" >}}
  {{< tabs >}}
  {{< tab "DJ Khaled" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/dj khaled.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Rick Ross</td>
          <td>0.685</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.648</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.627</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.601</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.591</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 43</h1>
      <img src="/images/artists/dj_khaled.png">
    </div>
  </div>
  {{< spotify type="track" id="3DXncPQOG4VBw3QHh3S817" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Drake" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/drake.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.784</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.753</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.736</td>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.725</td>
        </tr>
        <tr>
          <td>Nicki Minaj</td>
          <td>0.722</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 253</h1>
      <img src="/images/artists/drake.png">
    </div>
  </div>  
  {{< spotify type="track" id="1zi7xx7UVEFkmKfv06H8x0" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Eminem" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/eminem.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.661</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.649</td>
        </tr>
        <tr>
          <td>kanye West</td>
          <td>0.633</td>
        </tr>
        <tr>
          <td>Jay-Z</td>
          <td>0.598</td>
        </tr>
        <tr>
          <td>50 Cent</td>
          <td>0.595</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 89</h1>
      <img src="/images/artists/eminem.png">
    </div>
  </div>
  {{< spotify type="track" id="1v7L65Lzy0j0vdpRjJewt1" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Future" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/future.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.764</td>
        </tr>
        <tr>
          <td>Young Thug</td>
          <td>0.754</td>
        </tr>
        <tr>
          <td>Lil Uzi Vert</td>
          <td>0.736</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.725</td>
        </tr>
        <tr>
          <td>Gunna</td>
          <td>0.719</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 126</h1>
      <img src="/images/artists/future.png">
    </div>
  </div>
  {{< spotify type="track" id="0VgkVdmE4gld66l8iyGjgx" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "J. Cole" >}}
  <div class="row">
    <div class="column">
      <table>
      <img src="/images/artist_dists/j. cole.png">
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.688</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.646</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.635</td>
        </tr>
        <tr>
          <td>Jay-Z</td>
          <td>0.603</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.602</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 51</h1>
      <img src="/images/artists/j._cole.png">
    </div>
  </div>
  {{< spotify type="track" id="68Dni7IE4VyPkTOH9mRWHr" width="50%" height="80" >}}
 
  {{< /tab >}}
  {{< tab "Jay-Z" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/jay-z.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.713</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.694</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.676</td>
        </tr>
        <tr>
          <td>Rick Ross</td>
          <td>0.636</td>
        </tr>
        <tr>
          <td>Nicki Minaj</td>
          <td>0.620</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 95</h1>
      <img src="/images/artists/jay-z.png">
    </div>
  </div>
  {{< spotify type="track" id="4Li2WHPkuyCdtmokzW2007" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Juice Wrld" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/juice wrld.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.646</td>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.637</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.613</td>
        </tr>
        <tr>
          <td>Lil Uzi Vert</td>
          <td>0.609</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.607</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 70</h1>
      <img src="/images/artists/juice_wrld.png">
    </div>
  </div>
  {{< spotify type="track" id="285pBltuF7vW8TeWk8hdRR" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Kanye West" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/kanye west.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.753</td>
        </tr>
        <tr>
          <td>Jay-Z</td>
          <td>0.713</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.692</td>
        </tr>
        <tr>
          <td>Big Sean</td>
          <td>0.685</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.656</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 132</h1>
      <img src="/images/artists/kanye_west.png">
    </div>
  </div>  
  {{< spotify type="track" id="0j2T0R9dR9qdJYsB7ciXhf" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Lil Baby" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/lil baby.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Durk</td>
          <td>0.802</td>
        </tr>
        <tr>
          <td>Gunna</td>
          <td>0.780</td>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.764</td>
        </tr>
        <tr>
          <td>Meek Mill</td>
          <td>0.748</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.736</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 97</h1>
      <img src="/images/artists/lil_baby.png">
    </div>
  </div>
  {{< spotify type="track" id="78QR3Wp35dqAhFEc2qAGjE" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Lil Durk" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/lil durk.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.802</td>
        </tr>
        <tr>
          <td>Polo G</td>
          <td>0.710</td>
        </tr>
        <tr>
          <td>Meek Mill</td>
          <td>0.675</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.661</td>
        </tr>
        <tr>
          <td>Youngnoy Never Broke Again</td>
          <td>0.660</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 71</h1>
      <img src="/images/artists/lil_durk.png">
    </div>
  </div>
  {{< spotify type="track" id="2SAqBLGA283SUiwJ3xOUVI" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Lil Uzi Vert" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/lil uzi vert.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.736</td>
        </tr>
        <tr>
          <td>Young Thug</td>
          <td>0.714</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.686</td>
        </tr>
        <tr>
          <td>Gunna</td>
          <td>0.674</td>
        </tr>
        <tr>
          <td>Travis Scott</td>
          <td>0.647</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 80</h1>
      <img src="/images/artists/lil_uzi_vert.png">
    </div>
  </div>
  {{< spotify type="track" id="7GX5flRQZVHRAGd6B4TmDO" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Lil Wayne" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/lil wayne.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.784</td>
        </tr>
        <tr>
          <td>Nicki Minaj</td>
          <td>0.753</td>
        </tr>
        <tr>
          <td>Rick Ross</td>
          <td>0.708</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.704</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.692</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 169</h1>
      <img src="/images/artists/lil_wayne.png">
    </div>
  </div>  
  {{< spotify type="track" id="5UsLjwBaTHBX4ektWIr4XX" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Nicki Minaj" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/nicki minaj.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.753</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.722</td>
        </tr>
        <tr>
          <td>Chris Brown</td>
          <td>0.677</td>
        </tr>
        <tr>
          <td>Kanye West</td>
          <td>0.647</td>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.645</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 112</h1>
      <img src="/images/artists/nicki_minaj.png">
    </div>
  </div>
  {{< spotify type="track" id="0dKg2vGC1hFqcK5LGTaKzX" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Snoop Dogg" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/snoop dogg.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Dr. Dre</td>
          <td>0.587</td>
        </tr>
        <tr>
          <td>Nate Dogg</td>
          <td>0.586</td>
        </tr>
        <tr>
          <td>Lil Wayne</td>
          <td>0.543</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.537</td>
        </tr>
        <tr>
          <td>Pharrell Williams</td>
          <td>0.534</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 50</h1>
      <img src="/images/artists/snoop_dogg.png">
    </div>
  </div>
  {{< spotify type="track" id="3FNy4yzOhHhFBeA5p4ofoq" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Travis Scott" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/travis scott.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.693</td>
        </tr>
        <tr>
          <td>Young Thug</td>
          <td>0.683</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.679</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.672</td>
        </tr>
        <tr>
          <td>Gunna</td>
          <td>0.651</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 76</h1>
      <img src="/images/artists/travis_scott.png">
    </div>
  </div>
  {{< spotify type="track" id="6gBFPUFcJLzWGx4lenP6h2" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Young Thug" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/young thug.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Gunna</td>
          <td>0.780</td>
        </tr>
        <tr>
          <td>Future</td>
          <td>0.754</td>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.721</td>
        </tr>
        <tr>
          <td>Lil Uzi Vert</td>
          <td>0.714</td>
        </tr>
        <tr>
          <td>Travis Scott</td>
          <td>0.683</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 70</h1>
      <img src="/images/artists/young_thug.png">
    </div>
  </div>
  {{< spotify type="track" id="1IIKrJVP1C9N7iPtG6eOsK" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Youngboy Never Broke Again" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/youngboy never broke again.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Lil Baby</td>
          <td>0.692</td>
        </tr>
        <tr>
          <td>Dababy</td>
          <td>0.662</td>
        </tr>
        <tr>
          <td>Polo G</td>
          <td>0.661</td>
        </tr>
        <tr>
          <td>Lil Durk</td>
          <td>0.660</td>
        </tr>
        <tr>
          <td>Drake</td>
          <td>0.645</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 79</h1>
      <img src="/images/artists/youngboy_never_broke_again.png">
    </div>
  </div>
  {{< spotify type="track" id="1oWM79mUVdZGCGYjSirHZR" width="50%" height="80" >}}

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}

{{< tab "Rock" >}}
  {{< tabs >}}
  {{< tab "Elvis Presley" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/elvis presley.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.567</td>
        </tr>
        <tr>
          <td>taylor Swift</td>
          <td>0.558</td>
        </tr>
        <tr>
          <td>Dionne Warwick</td>
          <td>0.555</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.539</td>
        </tr>
        <tr>
          <td>Cher</td>
          <td>0.538</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 89</h1>
      <img src="/images/artists/elvis_presley.png">
    </div>
  </div>
  {{< spotify type="track" id="44AyOl4qVkzS48vBsbNXaC" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "Queen" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/queen.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.401</td>
        </tr>
        <tr>
          <td>Justin Bieber</td>
          <td>0.393</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.390</td>
        </tr>
        <tr>
          <td>The Temptations</td>
          <td>0.389</td>
        </tr>
        <tr>
          <td>Bee Gees</td>
          <td>0.382</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 22</h1>
      <img src="/images/artists/queen.png">
    </div>
  </div>
  {{< spotify type="track" id="4u7EnebtmKWzUH433cf5Qv" width="50%" height="80" >}}

  {{< /tab >}}
  {{< tab "The Beatles" >}}
  <div class="row">
    <div class="column">
      <img src="/images/artist_dists/the beatles.png">
      <table>
        <tr>
          <th>Most similar artists</th>
          <th>Similarity score</th>
        </tr>
        <tr>
          <td>Aretha Franklin</td>
          <td>0.516</td>
        </tr>
        <tr>
          <td>Taylor Swift</td>
          <td>0.488</td>
        </tr>
        <tr>
          <td>Stevie Wonder</td>
          <td>0.486</td>
        </tr>
        <tr>
          <td>Elvis Presley</td>
          <td>0.484</td>
        </tr>
        <tr>
          <td>Ray Charles</td>
          <td>0.484</td>
        </tr>
      </table>
    </div>
    <div class="column_img">
      <h1>Number of songs on 'Hot-100': 65</h1>
      <img src="/images/artists/the_beatles.png">
    </div>
  </div>
  {{< spotify type="track" id="6dGnYIeXmHdcikdzNNDMm2" width="50%" height="80" >}}

  {{< /tab >}}
  {{< /tabs >}}
{{< /tab >}}
{{< /tabs >}}