package com.awesomeproject.custom;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;

import com.awesomeproject.NativeAPIActivity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by tiger on 16/6/10.
 */
public class IntentModule extends ReactContextBaseJavaModule{

    public IntentModule(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentModule";
    }

    @ReactMethod
    public void dataToJS(Callback successCallback, Callback errorCallback){
        try {
            Activity curActivity = getCurrentActivity();
            String result = curActivity.getIntent().getStringExtra("data");
            if (TextUtils.isEmpty(result)) {
                result = "No Data.";
            }

            successCallback.invoke(result);
        } catch(Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void startActivityFromJS(String name, String parms){
        try {
            Activity curActivity = getCurrentActivity();

            if(null != curActivity){
                Class toActivity = Class.forName(name);

                Intent intent = new Intent(curActivity, toActivity);
                intent.putExtra("param", parms);

                curActivity.startActivity(intent);
            }
        } catch (Exception e) {
            throw new JSApplicationIllegalArgumentException(e.getMessage());
        }
    }

    @ReactMethod
    public void startActivityForResultFromJS(String className, int reqCode,
                                             Callback succCallback, Callback errorCallback){
        try {
            Activity curActivity = getCurrentActivity();

            if(null != curActivity){
                Class toActivity = Class.forName(className);

                Intent intent = new Intent(curActivity, toActivity);

                curActivity.startActivityForResult(intent, reqCode);

                succCallback.invoke(NativeAPIActivity.mQueue.take());
            }
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}















