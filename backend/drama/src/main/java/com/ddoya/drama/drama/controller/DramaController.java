package com.ddoya.drama.drama.controller;

import com.ddoya.drama.common.response.ApiResponse;
import com.ddoya.drama.drama.dto.request.DramaProblemReqDto;
import com.ddoya.drama.drama.dto.response.DramaClipsResDto;
import com.ddoya.drama.drama.dto.response.DramaProblemResDto;
import com.ddoya.drama.drama.dto.response.DramasResDto;
import com.ddoya.drama.drama.service.DramaService;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/drama")
@RequiredArgsConstructor
public class DramaController {

    private final DramaService dramaService;

    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllDramas() {
        DramasResDto dramas = dramaService.getAllDramasOrderByHit();

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("전체 드라마 조회 완료").data(dramas)
                .build());
    }

    @GetMapping("/clip/{dramaId}")
    public ResponseEntity<ApiResponse> getAllDramaClips(@PathVariable Integer dramaId) {
        DramaClipsResDto dramaClips = dramaService.getAllDramaClips(dramaId);

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(dramaClips)
                .build());
    }

    @GetMapping("/clip/artist/{artistId}")
    public ResponseEntity<ApiResponse> getArtistsClips(@PathVariable Integer artistId) {
        DramaClipsResDto dramaClips = dramaService.getArtistsClips(artistId);

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("클립 조회 완료").data(dramaClips)
                .build());
    }

    @GetMapping("/problem/{dramaProblemId}")
    public ResponseEntity<ApiResponse> getDramaProblem(@PathVariable Integer dramaProblemId) {
        DramaProblemResDto dramaProblem = dramaService.getDramaProblem(dramaProblemId);

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 조회 완료")
                .data(dramaProblem).build());
    }

    @PostMapping("/problem/result")
    public ResponseEntity<ApiResponse> addDramaProblemScore(HttpServletRequest httpServletRequest,
        @Valid @RequestBody DramaProblemReqDto dramaProblemReqDto) {
        dramaService.addDramaProblemScore(
            Integer.valueOf(httpServletRequest.getHeader("X-Authorization-Id")),
            dramaProblemReqDto);

        return ResponseEntity.ok(
            ApiResponse.builder().status(HttpStatus.OK.value()).message("문제 풀이 결과 등록 완료")
                .data(null).build());
    }
}
