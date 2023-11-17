package com.ddoya.auth.history.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class HistoriesResDto<T> {

    private Integer size;
    private List<T> histories;
}
