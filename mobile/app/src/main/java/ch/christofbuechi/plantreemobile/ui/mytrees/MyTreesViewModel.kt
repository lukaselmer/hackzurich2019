package ch.christofbuechi.plantreemobile.ui.mytrees

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MyTreesViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is my trees Fragment"
    }
    val text: LiveData<String> = _text
}