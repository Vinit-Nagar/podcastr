import { GeneratePodcastProps } from '@/types'
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'

const useGeneratePodcast = ({ setAudio, voiceType, voicePrompt, setAudioStorageId }: GeneratePodcastProps) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const generatePodcast = async () => {
        setIsGenerating(true);
        setAudio('');

        if (!voicePrompt) {
            return setIsGenerating(false)
        }

        try {
            // const response = await getPodcastAudio({
            //     voice:voiceType,
            //     input: voicePrompt
            // })

        } catch (error) {
            console.log('Error generating podcast', error)
            setIsGenerating(false)
        }
    }
    return {
        isGenerating,
        generatePodcast
    }
}

const GeneratePodcast = (props: GeneratePodcastProps) => {
    const { isGenerating, generatePodcast } = useGeneratePodcast(props);

    return (
        <div>
            <div className='flex flex-col gap-2.5'>
                <Label className="text-16 font-bold text-white-1">
                    Ai Prompt To Generate Podcast
                </Label>
                <Textarea
                    className='input-class font-light focus-visible:ring-offset-orange-1'
                    placeholder='Provide Text To Generate Audio'
                    rows={5}
                    value={props.voicePrompt}
                    onChange={(e) => props.setVoicePrompt(e.target.value)}
                />
            </div>
            <div className='mt-5 w-full max-w-[200px]'>
                <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-bold text-white-1">
                    {isGenerating ? (
                        <>
                            Generating
                            <Loader size={20} className="animate-spin ml-2" />
                        </>
                    ) : (
                        'Generate'
                    )}
                </Button>
            </div>
            {props.audio && (
                <audio
                    controls
                    src={props.audio}
                    autoPlay
                    className='mt-5'
                    onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)}
                />
            )}
        </div>
    )
}

export default GeneratePodcast
