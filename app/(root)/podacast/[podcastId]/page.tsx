import React from 'react'

const podcastDetails = ({ params }: { params: { podcastId: string } }) => {
    { console.log(params.podcastId) }
    return (

        <p className='text-white-1'>PodcastDetails for {params.podcastId}</p>
    )
}

export default podcastDetails
