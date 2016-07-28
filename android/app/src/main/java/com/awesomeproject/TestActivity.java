package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

/**
 * Created by tiger on 16/6/9.
 */
public class TestActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.bt1:
                Intent mIntent = new Intent();
                mIntent.putExtra("three_result", "I'm back from TestActivity.");
                TestActivity.this.setResult(Activity.RESULT_OK, mIntent);
                TestActivity.this.finish();
                break;
        }
    }
}
