package com.Devmountain.groceryApp.common;

import java.time.LocalDateTime;
/*Api Class subbed for my Postman calls CRUD tests appeared on separate website*/
public class ApiResponse {
    private final boolean success;
    private final String message;

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public String getTimestamp() {
        return LocalDateTime.now().toString();
    }
}

