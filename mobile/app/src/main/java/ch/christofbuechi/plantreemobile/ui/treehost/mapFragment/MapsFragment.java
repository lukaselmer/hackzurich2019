package ch.christofbuechi.plantreemobile.ui.treehost.mapFragment;


import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

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

import java.util.List;

import ch.christofbuechi.plantreemobile.MainActivity;
import ch.christofbuechi.plantreemobile.R;
import ch.christofbuechi.plantreemobile.ui.tools.MapsViewModel;
import ch.christofbuechi.plantreemobile.ui.treehost.Person;

public class MapsFragment extends Fragment implements OnMapReadyCallback {


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        MapsViewModel viewmodel = ViewModelProviders.of(this).get(MapsViewModel.class);
        View view = inflater.inflate(R.layout.fragment_maps, container, false);


        SupportMapFragment mMapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.opportunitymap);
        mMapFragment.getMapAsync(this);

        return view;


    }

    @Override
    public void onMapReady(GoogleMap map) {
        List<Person> list = Person.initializeData();

        for (Person person : list) {
            map.addMarker(new MarkerOptions().position(person.asLatLng()).title(person.getTextForMarker()));
        }

        map.animateCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(47.389642, 8.516050),15), 1, null);
    }
}