import {usePlaybackState} from "react-spotify-web-playback-sdk";
import {FC} from "react";

export const CurrentSong: FC = () => {
    const playbackState = usePlaybackState(true);

    if (playbackState === null) return null;

    return  <span>Current song: {playbackState.track_window?.current_track?.name}</span>;
};