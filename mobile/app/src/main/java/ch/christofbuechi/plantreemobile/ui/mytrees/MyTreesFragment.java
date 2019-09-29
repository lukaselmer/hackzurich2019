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

import com.google.android.libraries.maps.CameraUpdateFactory;
import com.google.android.libraries.maps.GoogleMap;
import com.google.android.libraries.maps.OnMapReadyCallback;
import com.google.android.libraries.maps.SupportMapFragment;
import com.google.android.libraries.maps.model.LatLng;
import com.google.android.libraries.maps.model.MarkerOptions;

import ch.christofbuechi.plantreemobile.MainActivity;
import ch.christofbuechi.plantreemobile.R;

public class MyTreesFragment extends Fragment implements OnMapReadyCallback {


    @Override
    public void onStart() {
        MainActivity mainActivity = (MainActivity) getActivity();
        mainActivity.setFabVisibility(View.GONE);
        super.onStart();
    }

    @Override
    public void onStop() {
        MainActivity mainActivity = (MainActivity) getActivity();
        mainActivity.setFabVisibility(View.VISIBLE);
        super.onStop();
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        MyTreesViewModel viewmodel = ViewModelProviders.of(this).get(MyTreesViewModel.class);

        View view = inflater.inflate(R.layout.fragment_mytrees, container, false);
        TextView textview = view.findViewById(R.id.text_mytrees);


        SupportMapFragment mMapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.map);
        mMapFragment.getMapAsync(this);

        return view;

    }

    @Override
    public void onMapReady(GoogleMap map) {

        for (TreePlace place : TreePlace.getSamples()) {
            map.addMarker(new MarkerOptions().position(place.asLatLng()).title(place.getTextForMarker()));
        }

        map.animateCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(47.389642, 8.516050),15), 1, null);
    }
}
