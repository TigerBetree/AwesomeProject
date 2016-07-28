package com.awesomeproject;

import com.facebook.react.*;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by tiger on 16/6/3.
 */
public class TextActivity extends ReactActivity{

    @Override
    protected String getMainComponentName() {
        return "TestText";
    }

    @Override
    protected String getJSMainModuleName() {
        return "text";
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
