package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by liuhu on 2016/6/23.
 */
public class InputOutputActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "InputOutputApp";
    }

    @Override
    protected String getJSMainModuleName() {
        return "./inputoutput/index.inputoutput";
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
