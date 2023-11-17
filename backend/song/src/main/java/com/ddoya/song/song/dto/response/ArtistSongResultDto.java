package com.ddoya.song.song.dto.response;

import com.ddoya.song.common.dto.SongDto;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ArtistSongResultDto {

    int result;

    int songCnt;

    List<SongDto> songList;
}
