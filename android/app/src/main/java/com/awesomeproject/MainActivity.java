package com.awesomeproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;

public class MainActivity extends Activity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle saveInstanceState) {
        super.onCreate(saveInstanceState);
        setContentView(R.layout.activity_main);

        test1();
    }

    private void test1() {
        DisplayMetrics metric = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metric);
        int width = metric.widthPixels;  // 屏幕宽度（像素）
        int height = metric.heightPixels;  // 屏幕高度（像素）
        float density = metric.density;  // 屏幕密度（0.75 / 1.0 / 1.5）
        int densityDpi = metric.densityDpi;  // 屏幕密度DPI（120 / 160 / 240）

        Log.d("Tiger", "width : " + width);
        Log.d("Tiger", "height : " + height);
        Log.d("Tiger", "density : " + density);
        Log.d("Tiger", "densityDpi : " + densityDpi);
    }

    @Override
    public void onClick(View v) {
        Class clazz = null;
        switch (v.getId()) {
            case R.id.bt1:
                clazz = TestReactActivity.class;
                break;
            case R.id.bt2:
                clazz = CustomReactActivity.class;
                break;
            case R.id.bt3:
                clazz = TextActivity.class;
                break;
            case R.id.bt4:
                clazz = ImageActivity.class;
                break;
            case R.id.bt5:
                clazz = ReactUIActivity.class;
                break;
            case R.id.bt6:
                clazz = DrawerLayoutActivity.class;
                break;
            case R.id.bt7:
                clazz = ScrollViewActivity.class;
                break;
            case R.id.bt8:
                clazz = NativeAPIActivity.class;
                break;
            case R.id.bt9:
                clazz = CounterActivity.class;
                break;
            case R.id.bt10:
                clazz = InputOutputActivity.class;
                break;
            case R.id.bt11:
                clazz = MovieActivity.class;
                break;
            case R.id.bt12:
                clazz = FlexBoxActivity.class;
                break;
            case R.id.bt13:
                clazz = ReadingActivity.class;
                break;
        }
        Intent intent = new Intent(MainActivity.this, clazz);
        startActivity(intent);
    }
}
