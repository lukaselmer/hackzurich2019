package ch.christofbuechi.plantreemobile.ui.mytrees;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProviders;

import ch.christofbuechi.plantreemobile.R;

public class MyTreesFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        MyTreesViewModel viewmodel = ViewModelProviders.of(this).get(MyTreesViewModel.class);

        View view = inflater.inflate(R.layout.fragment_tools, container, false);
        TextView textview = view.findViewById(R.id.text_tools);
        textview.setText(viewmodel.getText().getValue());

        return view;

    }
}
