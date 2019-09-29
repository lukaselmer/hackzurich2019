package ch.christofbuechi.plantreemobile.ui.treehost;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import com.google.android.material.bottomnavigation.BottomNavigationView;

import ch.christofbuechi.plantreemobile.MainActivity;
import ch.christofbuechi.plantreemobile.R;
import ch.christofbuechi.plantreemobile.ui.treehost.listFragment.FindTreehostFragment;
import ch.christofbuechi.plantreemobile.ui.treehost.mapFragment.MapsFragment;

public class NavigationFragment extends Fragment {

    public NavigationFragment() {
        // Required empty public constructor
    }

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

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                    FragmentManager fragmentManager = getChildFragmentManager();
            switch (item.getItemId()) {
                case R.id.navigation_menu_list:
                    fragmentManager.beginTransaction().replace(R.id.espacioLineas, new FindTreehostFragment()).commit();
                    return true;
                case R.id.navigation_menu_map:
                    fragmentManager.beginTransaction().replace(R.id.espacioLineas, new MapsFragment()).commit();
                    return true;
            }
            return false;
        }

    };

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        final View v = inflater.inflate(R.layout.fragment_navigation, container, false);

        BottomNavigationView navegacion = (BottomNavigationView) v.findViewById(R.id.navbartransporte);
        navegacion.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        FragmentManager fragmentManager = getChildFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.espacioLineas, new FindTreehostFragment()).commit();

        return v;
    }
}
