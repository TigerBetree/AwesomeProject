package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by tiger on 16/6/3.
 */
public class ImageActivity extends ReactActivity{

    @Override
    protected String getMainComponentName() {
        return "TestImage";
    }

    @Override
    protected String getJSMainModuleName() {
        return "image";
    }

    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage()
        );
    }
}
