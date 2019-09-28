package ch.christofbuechi.plantreemobile.ui.share;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProviders;

import antonkozyriatskyi.circularprogressindicator.CircularProgressIndicator;
import ch.christofbuechi.plantreemobile.R;

public class ShareFragment extends Fragment {




    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {


        ShareViewModel viewmodel = ViewModelProviders.of(this).get(ShareViewModel.class);

        View view = inflater.inflate(R.layout.fragment_share, container, false);
        TextView textview = view.findViewById(R.id.text_share);

        CircularProgressIndicator circularProgress = view.findViewById(R.id.circular_progress);

        // you can set max and current progress values individually
        circularProgress.setAnimationEnabled(true);
        circularProgress.setMaxProgress(10000);
        circularProgress.setCurrentProgress(5000);
        circularProgress.setDotColor(getResources().getColor(R.color.colorPrimaryDark));


        TextView shareView = view.findViewById(R.id.text_share_on_facebook);
        shareView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Uri imageUri = Uri.parse("android.resource://" + getActivity().getPackageName() + "/drawable/" + "ic_launcher");
                Intent sharingIntent = new Intent(Intent.ACTION_SEND);
                sharingIntent.setType("image/*");
                sharingIntent.putExtra(Intent.EXTRA_STREAM, imageUri);
                sharingIntent.putExtra(Intent.EXTRA_TEXT, "I did 5000 - halftime!! what about you?");
                sharingIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(sharingIntent, "Share via"));
            }
        });




        return view;

    }
}
