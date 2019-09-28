package ch.christofbuechi.plantreemobile.ui.upcomingplantings

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class UpcomingPlantingsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "Your upcoming Plantins"
    }
    val text: LiveData<String> = _text
}