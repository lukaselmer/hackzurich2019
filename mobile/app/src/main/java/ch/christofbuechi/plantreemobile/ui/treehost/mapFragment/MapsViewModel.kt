package ch.christofbuechi.plantreemobile.ui.tools

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MapsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "Location Details of Heidi Treehost"
    }
    val text: LiveData<String> = _text
}