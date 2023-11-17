package com.ddoya.song.global.client;

import com.ddoya.song.song.dto.request.HistoryReqDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {

    @PostMapping("api/auth/history/add")
    ResponseEntity<Object> addProblemHistory(@RequestBody HistoryReqDto historyReqDto);
}
