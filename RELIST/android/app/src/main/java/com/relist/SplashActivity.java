package com.relist;

import android.os.Bundle;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by Kuroneko on 1/22/2018.
 */

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
