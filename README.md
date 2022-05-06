# Analysing Song Artists and Lyrics Through Genius

# [**Link to our website**](https://davidariostenfeldt.github.io/project_website/)


This is the repository for our final project in computational social science 2022: _Analysing Song Artists and Lyrics Through Genius_. 

The project was developed by:

| Name                   |  Student number |
|:-----------------------|----------------:|
|David Ari Ostenfeldt    |s194237          |
|Kristian Rhindal Møllman| s194246         |
|Kristoffer Marboe       |  s194249        |

We make use of several APIs to collect data:

- [billboard.py](https://github.com/guoguo12/billboard-charts) to get a list of songs from Billboards 'Hot-100' chart going all the way back to 1958.
- [LyricsGenius](https://lyricsgenius.readthedocs.io/en/master/) to collect song titles, artists, release date and lyrics for the songs.

The data set used in the project can be downloaded here:

| Data Set                                                                                             |  Songs | Size (mb) |
|:-----------------------------------------------------------------------------------------------------|-------:|----------:|
| [Billboard List](https://drive.google.com/file/d/1Gd4YH_U98Z8mellnIV_haINLL4UhLJKG/view?usp=sharing) | 29,128 |       1.6 |
| [Pre-cleaned](https://drive.google.com/file/d/1cyiIWnXD_0CHLsj8C0tcwNadfYI7z8FD/view?usp=sharing)    | 29,128 |      92.5 |
| [Cleaned](https://drive.google.com/file/d/1Zhof84KbTJa3a1zfhN3TcwdWqPFCTnEv/view?usp=sharing)        | 25,419 |      44.2 |

The file `explainer-notebook.ipynb` contains all the code used to gather data and perform the network and text analyses.

The website is built on the [HUGO](https://gohugo.io/) framework and the [TailwindCSS](https://tailwindcss.com/) framework. The template used is a modified and expanded version of [project-website-template](https://github.com/peterampazzo/project-website-template) by Pietro Rampazzo.