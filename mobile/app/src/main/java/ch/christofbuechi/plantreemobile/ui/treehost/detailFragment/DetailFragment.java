package ch.christofbuechi.plantreemobile.ui.treehost.detailFragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.google.android.libraries.maps.CameraUpdateFactory;
import com.google.android.libraries.maps.GoogleMap;
import com.google.android.libraries.maps.OnMapReadyCallback;
import com.google.android.libraries.maps.SupportMapFragment;
import com.google.android.libraries.maps.model.LatLng;
import com.google.android.libraries.maps.model.MarkerOptions;

import java.util.Locale;

import ch.christofbuechi.plantreemobile.R;

public class DetailFragment extends Fragment implements OnMapReadyCallback {


    private LatLng latLng;

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        DetailFragmentArgs detailFragmentArgs = DetailFragmentArgs.fromBundle(getArguments());
        String name = detailFragmentArgs.getName();
        String age = detailFragmentArgs.getAge();
        String location = detailFragmentArgs.getLocation();
        Float lat = detailFragmentArgs.getLat();
        Float lng = detailFragmentArgs.getLng();
        Integer freespots = detailFragmentArgs.getFreespots();

        view.<TextView>findViewById(R.id.findtreehost_detail_user).setText(String.format("Detail from: %s", name));
        view.<TextView>findViewById(R.id.findtreehost_detail_age).setText(String.format("Age: %s", age));
        view.<TextView>findViewById(R.id.findtreehost_detail_freespots).setText(String.format(Locale.GERMAN, "Freespots for plants: %d", freespots));
        view.<TextView>findViewById(R.id.findtreehost_detail_location).setText(String.format("Location: %s", location));

        latLng = new LatLng(lat, lng);

        SupportMapFragment mMapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.findtreehost_detail_usermap);
        mMapFragment.getMapAsync(this);


    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_find_detail, container, false);
    }

    @Override
    public void onMapReady(GoogleMap map) {
        map.addMarker(new MarkerOptions().position(latLng));
        map.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng,15), 2, null);

    }
}
