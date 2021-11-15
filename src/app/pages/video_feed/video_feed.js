import React, { useEffect, useState } from 'react';
import ButtonNav from '../../components/button';
import Searchbar from '../../components/searchBar/searchbar';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Video from '../../components/video';
import VideoItem from '../../components/video_item';


//https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22topicId%22%3A%22paramore%22%7D

const url = 'https://www.googleapis.com/youtube/v3/';
//Avisar lo de la quota
const key = 'AIzaSyDlhZN19kdPW6ugY0mru4VtvhKSw1O6Goc'

const requestUrl = `${url}search?part=snippet&key=${key}`;

//  function makeUrl(baseUrl, params) {
//   let newUrl = baseUrl
//   for( let i = 0; i < Object.keys(params).length ; i++ ){
//     newUrl.concat(`${Object.keys(params)[i]}=${Object.values(params)[i]}&`);
//   }
//   console.log("url" + newUrl);
// }

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "50vw"
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
    },
    play: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "50vw"
    }
})

export default function VideoFeed() {
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState([]);
 
    const classes = useStyle()

    useEffect(() => {
        GetVideoMock();
    }, []); 

    // useEffect(() => {
    //     console.log("videos: use efect ", videos);
    // }, [videos]); 
    
    // useEffect(() => {
    //     console.log(videoID)
    // }, [videoID]);

    async function GetVideos() {
        await fetch(requestUrl)
        .then(res => res.json())
        .then(
          data => {
           setVideos(data.items);
           setVideoID(data.items[0].id.videoId);
           console.log("id: ", data.items[0].id.videoId)
          }).catch((error) => {
          console.log("error: ", error)
        })
      }

      function GetVideoMock() {
        const responseMock = {
            "kind": "youtube#searchListResponse",
            "etag": "dqWQBKG1QQUOZfXa5yUFCZYOlDc",
            "nextPageToken": "CAUQAA",
            "regionCode": "AR",
            "pageInfo": {
                "totalResults": 1000000,
                "resultsPerPage": 5
            },
            "items": [
                {
                    "kind": "youtube#searchResult",
                    "etag": "bqXenzzZwKdIRPYFTteaLJdBou0",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "RG6O-Qq79G0"
                    },
                    "snippet": {
                        "publishedAt": "2021-10-13T09:00:09Z",
                        "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
                        "title": "Nicki Nicole: Tiny Desk (Home) Concert",
                        "description": "From Sept. 15 through Oct. 15, Tiny Desk is celebrating Hispanic Heritage Month with an \"El Tiny\" takeover of the (home) concert series, featuring J Balvin, ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/RG6O-Qq79G0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/RG6O-Qq79G0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/RG6O-Qq79G0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "NPR Music",
                        "liveBroadcastContent": "none",
                        "publishTime": "2021-10-13T09:00:09Z"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "6W0aFIRgfWHU6M2L8RJ688YR23U",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "F4neLJQC1_E"
                    },
                    "snippet": {
                        "publishedAt": "2020-12-04T17:00:10Z",
                        "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
                        "title": "Dua Lipa: Tiny Desk (Home) Concert",
                        "description": "The Tiny Desk is working from home for the foreseeable future. Introducing NPR Music's Tiny Desk (home) concerts, bringing you performances from across the ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/F4neLJQC1_E/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/F4neLJQC1_E/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/F4neLJQC1_E/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "NPR Music",
                        "liveBroadcastContent": "none",
                        "publishTime": "2020-12-04T17:00:10Z"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "bO6Ob-4ShJu2-bSWUhce9HVL-Lw",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "iK1uBBv83M0"
                    },
                    "snippet": {
                        "publishedAt": "2020-10-16T16:00:11Z",
                        "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
                        "title": "Ozuna: Tiny Desk (Home) Concert",
                        "description": "The Tiny Desk is working from home for the foreseeable future. Introducing NPR Music's Tiny Desk (home) concerts, bringing you performances from across the ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/iK1uBBv83M0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/iK1uBBv83M0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/iK1uBBv83M0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "NPR Music",
                        "liveBroadcastContent": "none",
                        "publishTime": "2020-10-16T16:00:11Z"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "Rseeyfh8Rv-9WL2iughqCPi5iBk",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "jdHPotMqv1M"
                    },
                    "snippet": {
                        "publishedAt": "2021-10-04T09:00:30Z",
                        "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
                        "title": "Sech: Tiny Desk (Home) Concert",
                        "description": "From Sept. 15 through Oct. 15, Tiny Desk is celebrating Hispanic Heritage Month with an \"El Tiny\" takeover of the (home) concert series, featuring J Balvin, ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/jdHPotMqv1M/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/jdHPotMqv1M/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/jdHPotMqv1M/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "NPR Music",
                        "liveBroadcastContent": "none",
                        "publishTime": "2021-10-04T09:00:30Z"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "gyzdGIqTO0NwaWbqCyE6kPtFILg",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "MQSos6YvrKk"
                    },
                    "snippet": {
                        "publishedAt": "2021-05-27T09:00:07Z",
                        "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
                        "title": "Karol G: Tiny Desk (Home) Concert",
                        "description": "The Tiny Desk is working from home for the foreseeable future. Introducing NPR Music's Tiny Desk (home) concerts, bringing you performances from across the ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/MQSos6YvrKk/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/MQSos6YvrKk/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/MQSos6YvrKk/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "NPR Music",
                        "liveBroadcastContent": "none",
                        "publishTime": "2021-05-27T09:00:07Z"
                    }
                }
            ]
        }

        setVideos(responseMock.items);
        setVideoID(responseMock.items[0].id.videoId);
    }
    
    return (
        <Box>      
            <div sx={12}>
            <Box className={classes.container}>
                <Box className={classes.rowContainer}>
                    <Searchbar setVideoID={setVideoID} setVideos={setVideos}/>
                </Box>
            </Box>
            <Box className={classes.rowContainer}>
                <Box className={classes.play}>
                    <Video video={videos} id={videoID} />
                </Box>
                <Box>
                    <VideoItem videos={videos} onClick={setVideoID}/>
                </Box>
            </Box> 
                <ButtonNav page={"/video_detail"} pageName={"Detalle"} />
            </div>
        </Box>
    );
}