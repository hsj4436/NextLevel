package com.ddoya.song.artist.dto;

import com.ddoya.song.common.Entity.Artist;
import lombok.Data;

import java.util.List;

@Data
public class EntireArtistResultDto {

    int result;

    int artistCnt;

    List<Artist> artistList;
}